// index.ts

import he from 'he';
import striptags from 'striptags';

interface MediaDetails {
  height?: number;
  width?: number;
  file?: string;
}

interface OpengraphImage {
  altText?: string;
  caption?: string;
  mediaDetails?: MediaDetails;
  mediaItemUrl?: string;
  mediaType?: string;
}

interface TwitterImage {
  altText?: string;
  sourceUrl?: string;
  srcSet?: string;
}

interface Breadcrumb {
  url?: string;
  text?: string;
}

interface Schema {
  articleType?: string;
  pageType?: string;
  raw?: string;
}

interface Social {
  youTube?: string;
  wikipedia?: string;
  twitter?: string;
  soundCloud?: string;
  pinterest?: string;
  mySpace?: string;
  linkedIn?: string;
  instagram?: string;
  facebook?: string;
}

interface AuthorSeo {
  metaDesc?: string;
  metaRobotsNofollow?: string;
  metaRobotsNoindex?: string;
  title?: string;
  social?: Social;
}

interface Author {
  node: {
    seo?: AuthorSeo;
  };
}

interface Seo {
  canonical?: string;
  title?: string;
  metaDesc?: string;
  focuskw?: string;
  metaRobotsNoindex?: string;
  metaRobotsNofollow?: string;
  opengraphAuthor?: string;
  opengraphDescription?: string;
  opengraphTitle?: string;
  opengraphImage?: OpengraphImage;
  opengraphUrl?: string;
  opengraphSiteName?: string;
  opengraphPublishedTime?: string;
  opengraphModifiedTime?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: TwitterImage;
  breadcrumbs?: Breadcrumb[];
  cornerstone?: boolean;
  schema?: Schema;
  readingTime?: string;
  fullHead?: string;
  author?: Author;
}

interface Post {
  seo?: Seo;
  title?: string;
  content?: string;
  image?: string;
  canonical?: string;
  publishDate?: Date;
}

interface Meta {
  title: string;
  description: string;
  image: string;
  url: string;
  canonical: string;
}

interface TwitterOptions {
  twitterSite: string;
  twitterCreator: string;
}

const decode = he.decode;

const generateMeta = (post: Post): Meta => {
  const img = post.seo?.opengraphImage?.mediaItemUrl ?? post?.image ?? ''; // Ensure image is not undefined
  const canonical = post?.seo?.canonical ?? post?.canonical;

  const meta = {
    title: post?.seo?.title ?? post?.title ?? '', // Ensure title is not undefined
    description: post ? decode(striptags(post.seo?.metaDesc ?? post.content ?? '')).substring(0, 159) : '',
    image: img,
    url: post.seo?.opengraphUrl ?? '', // Ensure url is not undefined
    canonical: canonical ? decode(striptags(canonical)).substring(0, 159) : '',
  };

  return meta;
};

const countWords = (inputString: string): number => inputString.split(/\s+/).length;

const calculateReadingTime = (words: number): string => {
  const wordsPerMinute = 200;
  const minutes = words / wordsPerMinute;
  const roundedMinutes = Math.ceil(minutes);
  return roundedMinutes < 1
    ? 'Less than a minute'
    : roundedMinutes === 1
      ? '1 minute'
      : `${roundedMinutes} minutes`;
};

const generateSeoMeta = (post: Post, twitterOptions: TwitterOptions) => {
  const meta = generateMeta(post);

  const headMeta = [
    post.seo?.metaRobotsNoindex === 'noindex'
      ? { name: 'robots', content: 'noindex' }
      : { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    post.seo?.metaRobotsNofollow === 'nofollow' && { name: 'robots', content: 'nofollow' }
  ].filter(Boolean);

  return {
    meta,
    seoMeta: {
      description: meta.description,
      title: decode(striptags(meta.title)),
      ogTitle: post.seo?.opengraphTitle ?? meta.title,
      ogDescription: post.seo?.opengraphDescription ?? meta.description,
      ogUrl: post.seo?.opengraphUrl ?? meta.url,
      ogImageUrl: meta.image,
      ogLocale: 'en_US',
      ogType: 'article',
      ogImageSecureUrl: meta.image,
      ogSiteName: post.seo?.opengraphSiteName ?? 'SiteName',
      ogImageWidth: post.seo?.opengraphImage?.mediaDetails?.width ?? 1200,
      ogImageHeight: post.seo?.opengraphImage?.mediaDetails?.height ?? 630,
      twitterTitle: post.seo?.twitterTitle ?? meta.title,
      twitterDescription: post.seo?.twitterDescription ?? meta.description,
      twitterImage: post.seo?.twitterImage?.sourceUrl ?? meta.image,
      twitterCard: 'summary_large_image',
      twitterSite: twitterOptions.twitterSite,
      twitterCreator: twitterOptions.twitterCreator,
      articlePublishedTime: post.seo?.opengraphPublishedTime ?? post.publishDate?.toString(),
      articleModifiedTime: post.seo?.opengraphModifiedTime,
      ogImage: meta.image,
      twitterLabel1: 'Est. reading time',
      twitterData1: calculateReadingTime(countWords(meta.description)),
      breadcrumbs: post.seo?.breadcrumbs,
      cornerstone: post.seo?.cornerstone,
      schema: post.seo?.schema,
      author: post.seo?.author?.node?.seo,
    },
    head: {
      link: [{ rel: 'canonical', href: meta.canonical }],
      meta: headMeta,
    },
  };
};

export default generateSeoMeta;
