<script>
  import Icon from '@iconify/svelte';
  import { goto } from '$app/navigation'; // 페이지 이동 모듈
  import { page } from '$app/stores';
  import { diaries } from '$lib/store/store';

  const { id } = $page.params;  // $page.params를 사용하여 URL 파라미터 읽기
  const diary = $diaries.find((diary) => diary.id == id);
  const { content, date } = diary;
</script>

<main>
  <h1>보기 {id}</h1>
  <div class="diary">
    <p class="content">{content}</p>
    <div class="bottom-info">
      <span class="date">{date}</span>
      <div class="btns">
        <button class="btn" on:click={() => goto(`/edit/${id}`)}>
          <Icon icon="icon-park-outline:write" width="24" height="24"  style="color: #444;"/>
        </button>
        <button class="btn">
          <Icon icon="ic:baseline-delete" width="24" height="24"  style="color: #f80;" />
        </button>
      </div>
    </div>
  </div>
</main>

<style>
  .diary { cursor: auto; }
</style>