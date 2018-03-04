<template>
  <div class="container">
    <main-header/>
    <div class="hero"></div>
    <div class="columns">
      <div class="column is-3">
        <main-menu-left/>
      </div>
      <div class="column">
        <product-list v-bind:products=Products />
      </div>
    </div>
  </div>
</template>

<script>
  import AppLogo from '../components/AppLogo.vue'
  import MainHeader from '../components/MainHeader.vue'
  import ProductList from '../components/ProductList.vue'
  import MainMenuLeft from '../components/MainMenuLeft.vue'

  export default {
    fetch({store}) {
      return store.dispatch('getProducts');
    },
    computed: {
      Products() {
        return this.$store.state.products
      }
    },
    components: {
      AppLogo,
      MainHeader,
      ProductList,
      MainMenuLeft,
    },
  }
</script>

<style>

</style>
