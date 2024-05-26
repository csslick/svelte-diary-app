<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  $: console.log('page', $page.url.pathname);

  function clickHandler() {
    if ($page.url.pathname === '/read') {
      goto('/');
    } else if ($page.url.pathname === '/write') {
      // 쓰기 로직 추가
      goto('/');
    } else if ($page.url.pathname === '/edit') {
      // 수정 로직 추가
      goto('/');
    }
  }
</script>

<header>
  <h1>Diary {$page.url.pathname}</h1>
  {#if $page.url.pathname === '/read'}
    <button class='btn' on:click={() => goto('/')}>완료</button>
  {:else if $page.url.pathname === '/write' } 
    <button class='btn' on:click={() => goto('/')}>완료</button>
  {:else if $page.url.pathname === '/edit' } 
    <button class='btn' on:click={() => goto('/')}>완료</button>
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