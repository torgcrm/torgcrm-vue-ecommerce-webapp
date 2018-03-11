<template>
  <aside class="menu">
    <p class="menu-label">Каталог</p>
    <ul class="menu-list">
      <li v-for="item in catalogMenu" v-bind:key="item.id">
        <a v-bind:href="'/catalog/' + item.slug" >{{item.title}}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: "main-menu-left",
    props: ['menu'],
    computed: {
      catalogMenu() {
        return this.$store.state.catalogMenu
      }
    }
  }
</script>

<style scoped>

</style>
