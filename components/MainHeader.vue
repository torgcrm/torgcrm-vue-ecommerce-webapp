<template>
  <div class="component-main-header">
    <div class="level">
      <div class="level-left">
        <app-logo v-bind:name="CurrentProject.title" />
      </div>
      <nav class="level-right">
        <div class="level-right">
          <p>{{CurrentProject.phone}}</p>
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
    computed: {
      CurrentProject () {
        return this.$store.state.project
      },
    }
  }
</script>

<style scoped>

</style>
