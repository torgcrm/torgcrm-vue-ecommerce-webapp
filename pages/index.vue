<template>
  <div>
    <div class="level main-menu-header-container">
      <main-menu-header />
    </div>

    <div class="container">
      <main-header/>
      <section class="section">
        <div class="columns">
          <div class="column is-3">
            <main-menu-left/>
          </div>
          <div class="column">
            <product-list v-if="Products.length > 0" v-bind:products=Products />
          </div>
        </div>
      </section>
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
    fetch({store}) {
      return store.dispatch('getProducts');
    },
    computed: {
      Products() {
        return this.$store.state.products
      }
    },
    data() {
      return {
        isComponentModalActive: false,
      }
    },
    components: {
      AppLogo,
      MainHeader,
      ProductList,
      MainMenuLeft,
      MainMenuHeader,
    },
  }
</script>
