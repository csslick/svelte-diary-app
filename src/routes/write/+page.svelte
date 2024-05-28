<script>
  import formatDate from '$lib/utils/formatDate.js';
  import { writing, diaries } from '$lib/store/store.js';
  import TextAreaAutoSize from '$lib/components/TextAreaAutoSize.svelte'; //

  let val = ''; // textarea의 값을 저장할 변수
  $: $writing = val; // 입력중인 글 임시 저장
   
 

  // 한글로 포매팅 하여 시간을 표시합니다.
  // const formatDate = function() {
  //   return new Date().toLocaleDateString('ko-KR', {
  //     year: 'numeric',
  //     month: 'long',  // 'numeric' or 'long'
  //     day: 'numeric',
  //     weekday: 'long'
  //   })
  // }
</script>

<main>
  <div class="diary">
    <!-- <textarea
      placeholder="글쓰기를 시작하세요..."
    ></textarea> -->
    <TextAreaAutoSize 
      bind:value={val}
      minRows={2}
      maxRows={40}
    ></TextAreaAutoSize>
    <div class="bottom-info">
      <span class="date">{ formatDate() }</span>
    </div>
  </div>
</main>

<style lang='scss'>
  main { 
    padding: 35px 20px;
  }

  // textarea {
  //   border: none;
  //   width: 100%;
  //   font-size: inherit;
  //   padding: 0.5rem 0;
  //   background: transparent;
  //   outline: none;
  // }
</style>