# SEO Meta Generator for NUXT 3 WPGraphQL Yoast SEO Plugin

## Currently returning SEO data for:

- Pages
- Posts
- Custom post types

 ### _(coming soon)_
- Categories _(coming soon)_
- Custom taxonomies _(coming soon)_
- Yoast Configuration _(coming soon)_
  - Webmaster verification
  - Social profiles
  - Schemas
  - Breadcrumbs
  - Application/ld+json _(Google Schema)_

If there is any Yoast SEO data that is not currently returned, please raise an issue so we can add it to the roadmap.

## Usage
Download the repository via [GitHub](https://github.com/izzygld/seo-meta-nuxt-generator) or [npm](https://www.npmjs.com/package/@izzygld/seo-meta-nuxt-generator):

To query for the Yoast SEO Data, simply add the seo object to your query:


## Demo
You can preview the SEO Meta Generator for NUXT 3 WPGraphQL Yoast SEO Plugin in action [here](https://github.com/izzygld/seo-meta-nuxt-generator/blob/main/src/demo.ts).


### Post Type Data
```javascript
import generateSeoMeta from './index';

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
```

## Requirements
Download the repository via GitHub or npm:

To query for the Yoast SEO Data, simply add the seo object to your query:

## Preferred Built-ins
1. [WPGraphQL](https://github.com/wp-graphql)
2. [wp-graphql-yoast-seo](https://github.com/ashhitch/wp-graphql-yoast-seo)


## Support
Feel free to open an issue on GitHub if you have any questions or suggestions.
[Open an issue](https://github.com/izzygld/seo-meta-nuxt-generator/issues)

You can also reach out to me on Twitter:
[X/Twitter: @izzygld261](https://twitter.com/izzygld261)
