<template>
  <div>
    Create
  </div>
</template>

<script>
export default {
  name: "Create",
  created() {
    console.log(import.meta.env.BASE_URL,import.meta.env.VITE_APP_TITLE,import.meta.env.TITLE)
  }
}
</script>

<style scoped>

</style>