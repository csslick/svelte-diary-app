<script>
  import { writing, addDiary, editDiary, editId } from '$lib/store/store.js'; // 글쓰기 모듈
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  $: console.log('page', $page.url.pathname);

  function clickHandler() {
    console.log('editId', $editId);
    if ($page.url.pathname.startsWith('/read')) {
      goto('/');
    } else if ($page.url.pathname.startsWith('/write')) {
      // 쓰기 로직 추가
      if ($writing.length > 0) {
        addDiary();
      }
      goto('/');
    } else if ($page.url.pathname.startsWith('/edit')) {
      // 수정 로직 추가
      if ($writing.length > 0) {
        editDiary($editId);
      }
      goto('/');
    }
  }
</script>

<header>
  <h1>Diary {$page.url.pathname}</h1>
  <!-- 페이지에 따라 버튼 보여주는 로직 -->
  {#if $page.url.pathname.startsWith('/read')}
    <button class='btn' on:click={clickHandler}>완료</button>
  {:else if $page.url.pathname.startsWith('/write') } 
    <button class='btn' on:click={clickHandler}>완료</button>
  {:else if $page.url.pathname.startsWith('/edit') } 
    <button class='btn' on:click={clickHandler}>완료</button>
  {/if}
</header>
<nav>
  <a href="/">home</a>
  <a href="/read">read</a>
  <a href="/write">write</a>
  <a href="/edit">edit</a>
</nav>

<style lang='scss'>
  header {
    display: flex;
    justify-content: space-between;

    h1 { font-size: 28px; }
    padding: 20px;
    background: var(--main-color);
    color: var(--text-light);

    .btn {
      border: none;
      background: transparent;
      color: var(--text-light);
      font-size: 18px;
      cursor: pointer;
    }
  }
</style>