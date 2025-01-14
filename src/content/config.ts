// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; 
// 2. Define your collection(s)
const postsCollection = defineCollection({
    
});

const reactGettingStarted = defineCollection({

});

const reactComponents = defineCollection({
  loader: glob({ 
    pattern: "**/*.mdoc",
    base: "./src/content/developer/react/components" 
  }),
  
});


const developer = defineCollection({
  type: 'content',
  // schema: z.object({
  //   title: z.string(),
  //   description: z.string().optional(),
  //   library: z.string(),
  //   category: z.string(),
  //   component: z.string(),
  // }),
});

const designer = defineCollection({
  type: 'content',
});


// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  postsCollection, reactGettingStarted, developer, designer

};