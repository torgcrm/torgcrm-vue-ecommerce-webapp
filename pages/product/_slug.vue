<template>
  <div class="container">
    <main-header/>
    <div class="hero"></div>
    <div class="columns">
      <div class="column is-3">
        <main-menu-left/>
      </div>
      <div class="column">
        <div class="box">
          <h1>{{ProductDetails.title}}</h1>
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

  export default {
    head() {
      return {
        title: this.ProductDetails.title
      }
    },
    fetch({store, params}) {
      return store.dispatch('product/getProductBySlug', params.slug);
    },
    computed: {
      ProductDetails() {
        return this.$store.state.product.details
      },
    },
    components: {
      AppLogo,
      MainHeader,
      ProductList,
      MainMenuLeft
    }
  }
</script>

<style scoped>

</style>
