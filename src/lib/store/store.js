import { writable } from 'svelte/store';
import { posts } from '$lib/data/posts.js';

export const diaries = writable(posts);