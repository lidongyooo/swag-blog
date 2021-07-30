<template>
  <el-container>
    <el-header>
      <el-row class="header-information">
        <el-col :span="10" :xs="24">
          <div class="header-information-avatar">
            <div class="header-information-avatar-inner"></div>
          </div>
        </el-col>
        <el-col :span="10" :offset="1" :xs="{span:24,offset:0}">
          <div class="header-introduction">
            <div class="header-introduction-job">
              A Go/PHP developer
            </div>
            <div class="header-introduction-name">
              Lidongyooo
            </div>
            <div class="header-introduction-content">
              Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
            </div>
            <div class="header-introduction-operations">
              <a href="/">Download Resume</a>
              <a href="/" style="margin-left: 10px">Contact</a>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <div class="articles">
        <el-row class="articles-top">
          <el-col class="articles-top-title" :span="4" :xs="24">
            Articles
          </el-col>
          <el-col class="articles-top-tags" :span="12" :offset="8" :xs="{span:24, offset:0}">
            <div class="articles-top-tag">111111</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
            <div class="articles-top-tag">2222222</div>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name : "Home",
  mounted() {

  }
})

</script>

<style lang="scss" scoped>

.el-container{
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  .el-main{

    .articles{

      .articles-top{
        padding-bottom: 10px;

        .articles-top-title{
          font-size: 21px;
          font-weight: bold;
        }

        .articles-top-tags{
          display: flex;
          flex-wrap: wrap;

          .articles-top-tag{
            font-size: 12px;
            font-weight: 500;
            color: #d5d5d5;
            background-color: #222;
            padding: 0 10px;
            line-height: 23px;
            border: 2px solid #007ced;
            border-radius: 30px;
            margin: 10px 0px 0px 10px;
          }
        }
      }
    }
  }

  .el-header{
    margin-top: 10vh;
    display: block;
    height: auto;
    padding-bottom: 10vh;

    .header-information{
      width: 100%;
      justify-content: center;

      .el-col{
        height: 100%;
      }

      .header-introduction{
        padding: 30px 0px;
        margin-top: 45px;

        .header-introduction-operations{

          a{
            padding: 0.8em 1.2em;
            color: #fff;
            background-color: #333;
            box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
            text-decoration: none;
            font-weight: bold;
            border: 2px solid #D5D5D5;
            border-radius: 30px;
            line-height: 1.2em;
          }
        }

        .header-introduction-job{
          font-size: 16px;
          color: #aaa;
          font-weight: 300;
          margin-bottom: 10px;
        }

        .header-introduction-name{
          font-size: 48px;
          line-height: 56px;
          margin-top: 0;
          margin-bottom: 20px;
        }

        .header-introduction-content{
          font-family: "Poppins",Helvetica,sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75em;
          color: #d5d5d5;
          margin-bottom: 35px;
        }
      }

      .header-information-avatar{
        width: 400px;
        height: 400px;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 1000px;
        background-color: #444;
        border: 18px solid #444;
        -webkit-box-shadow: 0 0 25px 0 rgb(0 0 0 / 80%);
        -moz-box-shadow: 0 0 25px 0 rgba(0,0,0,.8);
        box-shadow: 0 0 25px 0 rgb(0 0 0 / 80%);

        .header-information-avatar-inner{
          height: 100%;
          width: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("@/assets/avatar.jpg");
        }
      }

    }
  }
}

@media only screen and (max-width: 767px){
  .el-container {

    .header-information-avatar{
      width: 230px !important;
      height: 230px !important;
    }

    .header-introduction{
      text-align: center;
      margin-top: 0 !important;
    }

    .articles-top{
      text-align: center;

      .articles-top-tags{
        justify-content: center;
      }
    }
  }
}

</style>