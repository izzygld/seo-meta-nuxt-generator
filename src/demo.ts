import generateSeoMeta from './index';


// Define a post object - this should come from your CMS or API
const post = {
  seo: {
    canonical: "https://example.com",
    title: "Example Title",
    metaDesc: "Example meta description",
    focuskw: "example keyword",
    metaRobotsNoindex: "noindex",
    metaRobotsNofollow: "nofollow",
    opengraphAuthor: "Author Name",
    opengraphDescription: "Example Open Graph description",
    opengraphTitle: "Example Open Graph title",
    opengraphImage: {
      altText: "Example alt text",
      caption: "Example caption",
      mediaDetails: {
        height: 800,
        width: 1200,
        file: "example.jpg",
      },
      mediaItemUrl: "https://example.com/example.jpg",
      mediaType: "image/jpeg",
    },
    opengraphUrl: "https://example.com",
    opengraphSiteName: "Example Site",
    opengraphPublishedTime: "2023-05-19T12:00:00Z",
    opengraphModifiedTime: "2023-05-19T12:00:00Z",
    twitterTitle: "Example Twitter title",
    twitterDescription: "Example Twitter description",
    twitterImage: {
      altText: "Example Twitter image alt text",
      sourceUrl: "https://example.com/twitter-image.jpg",
      srcSet: "https://example.com/twitter-image.jpg 1x, https://example.com/twitter-image@2x.jpg 2x",
    },
    breadcrumbs: [
      { url: "https://example.com", text: "Home" },
      { url: "https://example.com/page", text: "Page" },
    ],
    cornerstone: true,
    schema: {
      pageType: "WebPage",
      articleType: "Article",
      raw: '{"@context":"https://schema.org","@type":"WebPage"}',
    },
    readingTime: "2 minutes",
    fullHead: "<meta ...>",
  },
  title: "Example Title",
  content: "<p>Example content</p>",
  image: "https://example.com/image.jpg",
  canonical: "https://example.com",
  publishDate: new Date(),
};

const twitterOptions = {
  twitterSite: '@yourSite',
  twitterCreator: '@creatorName',
};

const { meta, seoMeta, head } = generateSeoMeta(post, twitterOptions);

// Use meta, seoMeta, and head as needed
