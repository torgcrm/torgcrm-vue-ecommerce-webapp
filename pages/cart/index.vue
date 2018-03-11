<template>
  <div>
    <div class="level main-menu-header-container">
      <main-menu-header/>
    </div>

    <div class="container">
      <main-header/>
      <div class="columns">
        <div class="column">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppLogo from '@/components/AppLogo.vue'
  import MainHeader from '@/components/MainHeader.vue'
  import ProductList from '@/components/ProductList.vue'
  import MainMenuLeft from '@/components/MainMenuLeft.vue'
  import MainMenuHeader from '@/components/MainMenuHeader'

  export default {
    head: {
      title: 'Main page',
    },
    mounted() {
      this.$store.dispatch('addToCart')
    },
    computed: {},
    components: {
      AppLogo,
      MainHeader,
      ProductList,
      MainMenuLeft,
      MainMenuHeader,
    },
  }
</script>
