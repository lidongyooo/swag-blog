<template>
  <div class="page">
    <article class="markdown-body">

    </article>
  </div>
</template>

<script>
import '@/assets/css/github-markdown-dark.css'

export default {
  name: "Index",
  created() {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped lang="scss">

.page{
  background-color: #0D1117;
  padding: 30px 0px;
}

.markdown-body {
  border-radius: 1vw;
  box-sizing: border-box;
  max-width: 80vw;
  margin: 0 auto;
  padding: 45px;
  border: 1px solid #30363D;
}

@media (max-width: 767px) {
  .markdown-body {
    max-width: 100vw;
    border: none;
    padding: 15px;
  }
}
</style>