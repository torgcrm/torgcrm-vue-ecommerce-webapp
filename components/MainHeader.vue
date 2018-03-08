<template>
  <nav class="level">
    <app-logo/>
    <main-menu-header v-bind:menu="topMenu" />
    <div class="level-right">
      <p>+7 499 111-22-33</p>
    </div>
  </nav>
</template>

<script>
  import MainMenuHeader from './MainMenuHeader.vue'
  import AppLogo from './AppLogo.vue'

  export default {
    name: "main-header",
    components: {
      MainMenuHeader,
      AppLogo,
    },
    computed: {
      topMenu() {
        return this.$store.state.topMenu
      }
    }
  }
</script>

<style scoped>

</style>
