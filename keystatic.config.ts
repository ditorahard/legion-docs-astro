import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    // Commented for later use
    // developer: collection({
    //   label: 'Developer',
    //   path: 'src/content/developer/**/**/*',
    //   slugField: 'component',
    //   format: { contentField: 'content' },
    //   schema: {
    //     title: fields.text({ label: 'Title' }),
    //     description: fields.text({ label: 'Description' }),
    //     library: fields.select({
    //       label: 'Library',
    //       options: [
    //         { label: 'React', value: 'react' },
    //         { label: 'Vue', value: 'vue' },
    //       ],
    //       defaultValue: 'react',
    //     }),
    //     category: fields.select({
    //       label: 'Category',
    //       options: [
    //         { label: 'Components', value: 'components' },
    //         { label: 'Getting Started', value: 'getting-started' },
    //       ],
    //       defaultValue: 'components',
    //     }),
    //     component: fields.slug({ 
    //       name: { label: 'Component Name' },
    //     }),
    //     content: fields.markdoc({
    //       label: 'Content',
    //       options: {
    //         image: {
    //           publicPath: '/src/content/developer',
    //           directory: 'src/content/developer'
    //         }
    //       }
    //     }),
    //   },
    // }),
    // posts: collection({
    //   label: 'Posts',
    //   slugField: 'title',
    //   path: 'src/content/posts/*',
    //   format: { contentField: 'content' },
    //   schema: {
    //     title: fields.slug({ name: { label: 'Title' } }),
    //     content: fields.markdoc({
    //       label: 'Content',
    //       options: {
    //         image:{
    //             publicPath:'src/content/posts/',
    //             directory:'src/content/posts/'
    //         }
    //       }
    //     }),
    //   },
    // }),

    designerGettingStarted: collection({
      label: 'Designer - Getting Started',
      slugField: 'title',
      path: 'src/content/designer/getting-started/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image:{
                publicPath:'src/content/designer/getting-started/',
                directory:'src/content/designer/getting-started/'
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
      slugField: 'title',
      path: 'src/content/developer/react/getting-started/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
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
        description: fields.text({ label: 'Description' }),
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
      slugField: 'pattern',
      path: 'src/content/developer/react/patterns/*',
      format: { contentField: 'content' },
      schema: {
        pattern: fields.slug({ name: { label: 'Pattern (React)' } }),
        description: fields.text({ label: 'Description' }),
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
    vueGettingStarted: collection({
      label: 'Vue - Getting Started',
      path: 'src/content/developer/vue/getting-started/*',
      slugField: 'title',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              publicPath: '/src/content/developer/vue/getting-started/',
              directory: 'src/content/developer/vue/getting-started/'
            }
          }
        }),
      },
    }),
    vueComponents: collection({
      label: 'Vue - Components',
      path: 'src/content/developer/vue/components/*',
      slugField: 'component',
      format: { contentField: 'content' },
      schema: {
        component: fields.slug({ name: { label: 'Component (Vue)' } }),
        description: fields.text({ label: 'Description' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              publicPath: '/src/content/developer/vue/components/',
              directory: 'src/content/developer/vue/components/'
            }
          }
        }),
      },
    }),
    vuePatterns: collection({
      label: 'Vue - Patterns',
      path: 'src/content/developer/vue/getting-started/*',
      slugField: 'pattern',
      format: { contentField: 'content' },
      schema: {
        pattern: fields.slug({ name: { label: 'Pattern (Vue)' } }),
        description: fields.text({ label: 'Description' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              publicPath: '/src/content/developer/vue/patterns/',
              directory: 'src/content/developer/vue/patterns/'
            }
          }
        }),
      },
    }),
    
    
  },
});