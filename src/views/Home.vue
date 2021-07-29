<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="12">1</el-col>
        <el-col :span="12">2</el-col>
      </el-row>
    </el-header>
    <el-main>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name : "Home"
})

</script>

<style lang="scss" scoped>
  .el-container{

    .el-header{

      .el-row{

        .el-col{
          border: 1px solid red;
        }
      }
    }
  }
</style>