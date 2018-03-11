<template>
  <div>
    <div class="level main-menu-header-container">
      <main-menu-header/>
    </div>

    <div class="container">
      <main-header/>
      <section class="section">
        <div class="columns">
          <div class="column is-3">
            <main-menu-left/>
          </div>
          <div class="column">
            <h1>{{PageDetails.title}}</h1>
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
    head() {
      return {
        title: this.PageDetails.title
      }
    },
    fetch({store, params}) {
      return store.dispatch('page/getPageDetails', params.slug);
    },
    computed: {
      PageDetails() {
        return this.$store.state.page.details
      }
    },
    components: {
      AppLogo,
      MainHeader,
      ProductList,
      MainMenuLeft,
      MainMenuHeader
    },
  }
</script>
