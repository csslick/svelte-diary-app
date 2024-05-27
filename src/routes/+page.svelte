<script>
  import Icon from '@iconify/svelte';
  import { diaries } from '$lib/store/store';
  import { goto } from '$app/navigation'; // 페이지 이동 모듈
  console.log($diaries)
</script>

<main class="container">
  {#each $diaries as diary}
    <div class="diary">
      <a href={`/read/${diary.id}`}>
        <p class="content">{diary.content}</p>
      </a>
      <div class="bottom-info">
        <span class="date">{diary.date}</span>
        <div class="btns">
          <button class="btn" on:click={() => goto(`/edit/${diary.id}`)}>
            <Icon icon="icon-park-outline:write" width="24" height="24"  style="color: #444;"/>
          </button>
          <button class="btn">
            <Icon icon="ic:baseline-delete" width="24" height="24"  style="color: #f80;" />
          </button>
        </div>
      </div>
    </div>
  {/each}
</main>

