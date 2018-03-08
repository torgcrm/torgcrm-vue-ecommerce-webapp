<template>
  <aside class="menu">
    <p class="menu-label">
      Catalog
    </p>
    <ul class="menu-list">
      <li v-for="item in leftMenu.menuItems" v-bind:key="item.id">
        <a a href="#">{{item.name}}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: "main-menu-left",
    props: ['menu'],
    computed: {
      leftMenu() {
        return this.$store.state.topMenu
      }
    }
  }
</script>

<style scoped>

</style>
