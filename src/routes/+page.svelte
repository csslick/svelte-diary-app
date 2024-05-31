<script>
  import Btns from '$lib/components/Btns.svelte';
  import addIcon from '$lib/assets/icon_add.svg';
  // import Icon from '@iconify/svelte';
  import { diaries } from '$lib/store/store';
  // import { goto } from '$app/navigation'; // 페이지 이동 모듈
  console.log($diaries)
  export let data;
</script>

<main class="container">
  {#each data.posts as diary}
    <div class="diary">
      <a href={`/read/${diary.id}`}>
        <p class="content">{diary.content}</p>
      </a>
      <div class="bottom-info">
        <span class="date">{diary.date}</span>
        <Btns {diary} id='/'/>
        </div>
    </div>
  {/each}
</main>

<a href="/write" class='btn-write'>
  <img src={addIcon} alt="add">
</a>

<style lang="scss">
  .btn-write {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    img {
      width: 64px;
      height: 64px;
    }
  }
</style>