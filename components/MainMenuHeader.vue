<template>
  <div class="container">
    <div class="level">
      <p class="level-item header-menu-item" v-for="item in topMenu.menuItems" v-bind:key="item.id">
        <a v-bind:href="item.link">{{item.name}}</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "main-menu-header",
    computed: {
      topMenu() {
        return this.$store.state.topMenu
      }
    }
  }
</script>
