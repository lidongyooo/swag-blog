<template>
  <el-container>
    <el-header>
      <el-row class="header-information">
        <el-col :sm="24" :lg="{span:10, offset:0}" :xs="24">
          <div class="header-information-avatar">
            <div class="header-information-avatar-inner"></div>
          </div>
        </el-col>
        <el-col :sm="{span:24,offset:0}" :lg="{span:10, offset:1}" :xs="{span:24,offset:0}">
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
          <el-col class="articles-tags" :span="12" :offset="8" :xs="{span:24, offset:0}">
            <div class="articles-tag">111111</div>
            <div class="articles-tag">2222222</div>
            <div class="articles-tag">2222222</div>
            <div class="articles-tag">2222222</div>
            <div class="articles-tag">2222222</div>
            <div class="articles-tag">2222222</div>
            <div class="articles-tag">2222222</div>
            <div class="articles-tag">2222222</div>
            <div class="articles-tag">2222222</div>
            <div class="articles-tag">2222222</div>
          </el-col>
        </el-row>
        <div class="articles-list">
          <div class="articles-list-item">
            <a href="/articles/1" class="articles-list-item-tile">
              xxxxxxxxxxxxxxxxxx
            </a>
            <div class="articles-list-item-information">
              <div class="articles-list-item-information-tags">
                <div class="articles-tag">111111</div>
                <div class="articles-tag">222222</div>
                <div class="articles-tag">333333</div>
              </div>
              <div class="articles-list-item-information-datetime">
                一年前
              </div>
            </div>
          </div>

          <div class="articles-list-item">
            <a href="/" class="articles-list-item-tile">
              哈哈是的所杀害的
            </a>
            <div class="articles-list-item-information">
              <div class="articles-list-item-information-tags">
                <div class="articles-tag">111111</div>
                <div class="articles-tag">222222</div>
                <div class="articles-tag">333333</div>
              </div>
              <div class="articles-list-item-information-datetime">
                一年前
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <pagination v-model="page" />
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Pagination from "@/components/Pagination.vue"

export default defineComponent({
  name : "Home",
  components: {
    Pagination
  },
  data(){
    return {
      page : 1
    }
  },
  watch: {
    page(newValue, oldValue){
      console.log(newValue, oldValue)
    }
  },
  mounted() {

  }
})

</script>

<style lang="scss" scoped>

.el-container{
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  padding-bottom: 80px;

  .el-main{
    margin-top: 10vh;

    .pagination{
      display: flex;
      justify-content: center;
      margin-top: 50px;
    }

    .articles{

      .articles-tag{
        font-size: 12px;
        font-weight: 500;
        color: #ffffff;
        background-color: #666666;
        padding: 2px 7px;
        border-radius: 3px;
        border: 1px solid transparent;
        margin: 8px 0px 0px 8px;
        line-height: 1.5em;
        cursor: pointer;
        user-select: none;
      }

      .articles-tag:hover{
        color: #222222;
      }

      .articles-tag_active{
        color: #222222;
      }

      .articles-list{
        margin-top: 2vh;

        .articles-list-item{
          padding-bottom: 20px;
          margin-top: 30px;
          border-bottom: 1px solid #555;
          display: flex;
          flex-direction: column;

          .articles-list-item-tile{
            text-decoration: none;
            padding-left: 8px;
            font-size: 32px;
            color: #f5f5f5;
            font-weight: bold;
          }

          .articles-list-item-information{
            margin-top: 15px;
            display: flex;
            justify-content: space-between;

            .articles-list-item-information-tags{
              display: flex;
            }

            .articles-list-item-information-datetime{
              padding-right: 8px;
              align-self: flex-end;
              font-weight: 400;
              cursor: default;
            }
          }
        }
      }


      .articles-top{
        padding-bottom: 10px;

        .articles-top-title{
          font-size: 21px;
          font-weight: bold;
        }

        .articles-tags{
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
  }

  .el-header{
    margin-top: 10vh;
    display: block;
    height: auto;

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

@media only screen and (max-width: 1200px){
  .el-container {

    .el-main{
      margin-top: 3vh;
    }

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

      .articles-tags{
        justify-content: center;
      }
    }
  }
}

</style>