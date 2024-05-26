<script>
  import Header from '$lib/components/Header.svelte';
</script>

<Header />
<slot />

<!-- 여기의 CSS는 전역적으로 적용이 된다. -->
<style lang='scss' global>
  @import '../app.scss';
</style>