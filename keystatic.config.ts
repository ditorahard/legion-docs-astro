import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image:{
                publicPath:'src/content/posts/',
                directory:'src/content/posts/'
            }
          }
        }),
      },
    }),
    designerFoundations: collection({
      label: 'Designer - Foundations',
      slugField: 'title',
      path: 'src/content/designer/foundations/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image:{
                publicPath:'src/content/designer/foundations/',
                directory:'src/content/designer/foundations/'
            }
          }
        }),
      },
    }),
    designerGuideline: collection({
      label: 'Designer - Guideline',
      slugField: 'title',
      path: 'src/content/designer/guideline/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image:{
                publicPath:'src/content/designer/guideline/',
                directory:'src/content/designer/guideline/'
            }
          }
        }),
      },
    }),
    reactGettingStarted: collection({
      label: 'React - Getting Started',
      slugField: 'component',
      path: 'src/content/developer/react/getting-started/*',
      format: { contentField: 'content' },
      schema: {
        component: fields.slug({ name: { label: 'Component (React)' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image:{
                publicPath:'src/content/developer/react/getting-started/',
                directory:'src/content/developer/react/getting-started/'
            }
          }
        }),
      },
    }),

    reactComponents: collection({
      label: 'React - Components',
      slugField: 'component',
      path: 'src/content/developer/react/components/*',
      format: { contentField: 'content' },
      schema: {
        component: fields.slug({ name: { label: 'Component (React)' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image:{
                publicPath:'src/content/developer/react/components/',
                directory:'src/content/developer/react/components/'
            }
          }
        }),
      },
    }),
    reactPatterns: collection({
      label: 'React - Patterns',
      slugField: 'component',
      path: 'src/content/developer/react/patterns/*',
      format: { contentField: 'content' },
      schema: {
        component: fields.slug({ name: { label: 'Component (React)' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image:{
                publicPath:'src/content/developer/react/patterns/',
                directory:'src/content/developer/react/patterns/'
            }
          }
        }),
      },
    }),
  },
});