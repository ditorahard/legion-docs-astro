// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const postsCollection = defineCollection({
    
});

const reactGettingStarted = defineCollection({

});

const reactComponents = defineCollection({
  
});


// const developer = defineCollection({
//   type: 'content',
//   schema: z.object({
//     title: z.string(),
//     description: z.string().optional(),
//     library: z.string(),
//     category: z.string(),
//     component: z.string(),
//   }),
// });


// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'posts': postsCollection,
  'react-getting-started': reactGettingStarted,
  'react-components': reactComponents,
  // 'developer': developer,

};