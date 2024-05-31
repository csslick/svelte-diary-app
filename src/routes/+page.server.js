import { error } from '@sveltejs/kit'
import { posts } from '../lib/data/posts.js'

export function load({ params }) {
  console.log('params: ', params);
  
  if (!posts) throw error(404, 'Not found');

  return {
    posts
  };
}
