import { v4 as uuidv4 } from 'uuid';
import formatDate from '$lib/utils/formatDate';
import { writable, get } from 'svelte/store';
import { posts } from '$lib/data/posts.js';

export const diaries = writable(posts); // 일기 데이터를 저장하는 store 변수
export const writing = writable(''); // 입력된 글을 임시 저장할 변수

export const addDiary = () => {
	let content = get(writing); // 다른 store 변수 참조시 get을 사용하여 가져옴

	// 글이 있는 경우에만 저장
	if (content) {
		const newDiary = {
			id: uuidv4(),
			date: formatDate(),
			content : content,
		};
		diaries.update((current) => [...current, newDiary]); // update 함수
		writing.set('');
	}
}
