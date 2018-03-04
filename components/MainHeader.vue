<template>
  <nav class="level">
    <app-logo />
    <main-menu-header />
    <div class="level-right">
      <p>phone number</p>
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
    }
  }
</script>

<style scoped>

</style>
