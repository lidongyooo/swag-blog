<template>
  <div id="vditor">
  </div>
</template>

<script>
import Vditor from 'vditor'
import "vditor/src/assets/scss/index.scss"

export default {
  name: "Create",
  data(){
    return {
      contentEditor: '',
    }
  },
  created() {
    let _this = this

    setInterval(() => {
      console.log(_this.contentEditor.getHTML(), _this.contentEditor.getValue())
    }, 3000)
  },
  mounted () {
    this.contentEditor = new Vditor('vditor', {
      theme: 'dark',
      height: 800,
      preview : {
        theme: {
          current: 'dark'
        }
      },
      after: () => {
        this.contentEditor.setValue('hello, Vditor + Vue!')
      },
    })
  },
}
</script>

<style scoped>

</style>