import { v4 as uuidv4 } from 'uuid';
import formatDate from '$lib/utils/formatDate';
import { writable, get } from 'svelte/store';
import { posts } from '$lib/data/posts.js';

export const diaries = writable(posts); // 일기 데이터를 저장하는 store 변수
export const writing = writable(''); // 입력된 글을 임시 저장할 변수
export const editId = writable(0); // 수정할 글의 id를 저장할 변수

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

// 다이어리 수정
export const editDiary = (id) => {
	diaries.update((current) => {
		// id 가 일치하는 글을 찾아 수정한 글 업데이트
		return current.map((diary) => {
			if (diary.id.toString() === id) {
				return { ...diary, content: get(writing) };
			} else {
				return diary;
			}
		});
	});
	writing.set('');
	editId.set(0);
}
