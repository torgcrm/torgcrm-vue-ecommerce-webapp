<template>
  <aside class="menu">
    <p class="menu-label">Каталог</p>
    <ul class="menu-list">
      <li v-for="item in catalog" v-bind:key="item.id">
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
      catalog() {
        return this.$store.state.catalog
      }
    }
  }
</script>

<style scoped>

</style>
