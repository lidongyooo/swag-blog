<template>
  <div class="page">
    <div class="title">
      {{ article.title }}
    </div>
    <article class="markdown-body" v-html="article.body">
    </article>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import '@/assets/css/github-markdown-dark.css'
import request from "@/common/request";

export default defineComponent({
  name: "Show",
  data(){
    return {
      article : {}
    }
  },
  created() {
    request.get("/articles/"+this.$route.params.id).then(res => {
      res = res.data
      if (res.code === 200) {
        this.article = res.data
      }
    })
  }
})
</script>

<style scoped lang="scss">

.page{
  background-color: #22272E;
  padding: 30px 0px;
  min-height: calc(100vh - 62px);

  .title{
    text-align: center;
    font-size: 32px;
    color: #f5f5f5;
    font-weight: 600;
    font-style: normal;
    padding-bottom: 35px;
  }
}

.markdown-body {
  border-radius: 1vw;
  box-sizing: border-box;
  max-width: 80vw;
  margin: 0 auto;
  padding: 45px;
  border: 1px solid #444C56;


  .zeroclipboard-container{
    display: none;
  }
}

@media (max-width: 767px) {
  .markdown-body {
    max-width: 100vw;
    border: none;
    padding: 15px;
  }
}
</style>