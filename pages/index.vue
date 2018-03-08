<template>
  <div class="container">
    <main-header />
    <div class="hero"></div>
    <div class="columns">
      <div class="column is-3">
        <main-menu-left />
      </div>
      <div class="column">
        <product-list v-if="Products.length > 0" v-bind:products=Products />
        <div class="box" v-if="Products.length <= 0">
          Items not found
        </div>
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
    head: {
      title: 'Main page',
    },
    fetch({store}) {
      store.dispatch('getTopMenu');
      store.dispatch('getLeftMenu');
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
