<template>
  <ul class="pagination">
    <li class="pagination-item" v-for="n in pages" :class="[pager.page === n ? 'pagination-item_active' : '']" @click="pageChange(n)">
      {{n}}
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Pagination",
  props: {
    modelValue: {
      type: Object
    }
  },
  methods: {
    pageChange(n){
      this.pager.page = n
      this.$emit('pageClick', this.pager.page)
    }
  },
  computed: {
    pager : {
      get(){
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    pages(){
      return Math.ceil(this.pager.count / this.pager.limit)
    }
  }
})
</script>

<style lang="scss" scoped>
.pagination {
  min-width: 100px;
  border: 2px solid #B72841;
  border-radius: 100px;
  padding: 10px 25px;
  color: #F0F4F6;
  font-weight: bold;
  font-size: 18px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .pagination-item{
    position: relative;
    right: 5px;
    user-select: none;
    cursor: pointer;
    padding: 5px 10px;
  }

  .pagination-item_active{
    background-color: #FF4C66;
    border-radius: 20px;
  }
}
</style>