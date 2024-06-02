<script>
    import { deleteDiary } from '$lib/store/store.js'; // 글쓰기 모듈
    import Icon from '@iconify/svelte';
    import { goto } from '$app/navigation'; // 페이지 이동 모듈
    export let diary;
    export let id;
    console.log('id', id);
</script>

<!-- 쓰기 페이지가 아니라면 버튼을 표시 -->
{#if id !== 'write'}
  <div class="bottom-info">
    <div class="btns">
      {#if id !== 'edit'} <!-- edit 페이지에서는 버튼을 표시하지 않음 -->
        <button class="btn" on:click={() => goto(`/edit/${diary.id}`)}>
          <Icon icon="icon-park-outline:write" width="24" height="24"  style="color: #444;"/>
        </button>
      {/if}
      <button 
        class="btn" 
        on:click={async () => {
          await deleteDiary(diary.id); 
          // goto('/');
          location.reload();
        }}>
        <Icon icon="ic:baseline-delete" width="24" height="24"  style="color: #f80;" />
      </button>
    </div>
  </div>
{/if}