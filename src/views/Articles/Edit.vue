<template>
  <el-container>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input v-model="form.tag_name"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <e-col :span="12">
          <el-input type="textarea" v-model="form.body"></el-input>
        </e-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import {defineComponent} from "vue";
import request from "@/common/request";

export default defineComponent({
  name: "Create",
  data(){
    return {
      form : {
        title : '',
        body : '',
        tag_name : '',
      }
    }
  },
  created() {
    request.get("/articles/"+this.$route.params.id).then(res => {
      res = res.data
      console.log(res)
      if (res.code === 200) {
        this.form.title = res.data.title
        this.form.body = res.data.body

        let tagNames = []
        for (let tag of res.data.tags) {
          tagNames.push(tag.name)
        }

        this.form.tag_name = tagNames.join(",")
      }
    }).catch(() => {
      this.$router.back()
    })
  },
  methods: {
    onSubmit(){
      request.post('/articles/'+this.$route.params.id, this.form).then(res => {
        res = res.data
        if (res.code === 200) {
          alert("成功")
        }
      })
    }
  },
  mounted() {
    document.getElementsByTagName("textarea")[0].style.height = "200px"
    document.getElementsByTagName("textarea")[0].style.border = "1px solid black"
    document.getElementsByTagName("input")[0].style.border = "1px solid black"
    document.getElementsByTagName("input")[1].style.border = "1px solid black"
  }
})
</script>

<style lang="scss" scoped>
.el-container{
  background: #FFFFFF;
  color: #222222 !important;
  width: 900px;
  margin: 0 auto;
  padding-top: 30px;

  .el-form{
    width: 500px;
    height: 500px;
  }
}
</style>