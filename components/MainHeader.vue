<template>
  <div class="component-main-header">
    <div class="level">
      <div class="level-left">
        <app-logo/>
      </div>
      <nav class="level-right">
        <div class="level-right">
          <p>+7 499 111-22-33</p>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  import AppLogo from './AppLogo.vue'

  export default {
    name: "main-header",
    components: {
      AppLogo,
    },
  }
</script>

<style scoped>

</style>
