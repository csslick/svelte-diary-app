<script>
  import Btns from '$lib/components/Btns.svelte';
  // import Icon from '@iconify/svelte';
  import { page } from '$app/stores'; // 페이지 정보를 가져올 모듈
  import { writing, diaries, editId } from '$lib/store/store.js';
  import TextAreaAutoSize from '$lib/components/TextAreaAutoSize.svelte'; //

  let id = $page.params.id;
  let editDiary = $diaries.find((diary) => diary.id == id);
  let val = editDiary.content;
  let date = editDiary.date;

  $editId = id; // store에 수정할 글 id를 저장
  $: {
    $writing = val; // 입력중인 글 임시 저장
    console.log($writing);
  }
</script>

<main>
  <div class="diary">
    <TextAreaAutoSize 
      bind:value={val}
      minRows={2}
      maxRows={40}
    ></TextAreaAutoSize>
    <div class="bottom-info">
      <span class="date">{ date }</span>
      <Btns diary={editDiary} {id} />
    </div>
  </div>
</main>
