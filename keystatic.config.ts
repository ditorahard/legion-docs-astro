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
    components: collection({
      label: 'React Components',
      slugField: 'component',
      path: 'src/content/react-components/*',
      format: { contentField: 'content' },
      schema: {
        component: fields.slug({ name: { label: 'Component (React)' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image:{
                publicPath:'src/content/react-components/',
                directory:'src/content/react-components/'
            }
          }
        }),
      },
    }),
  },
});