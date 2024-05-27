<script>
  import TextAreaAutoSize from '$lib/components/TextAreaAutoSize.svelte';
  import { diaries } from '$lib/store/store';

  let val = '';
</script>

<main>
  <div class="diary">
    <TextAreaAutoSize
      bind:value={val}
    ></TextAreaAutoSize>
    <div class="bottom-info">
      <span 
        class="date">
          { 
            new Date().toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',  // 'numeric' or 'long'
              day: 'numeric',
              weekday: 'long'
            })
          }
        </span>
    </div>
  </div>
</main>

<style lang='scss'>
  main { 
    padding: 20px;
    .diary { cursor: auto; }
    .bottom-info { margin-top: 30px; }
  }
</style>