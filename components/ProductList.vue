<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-4" v-for="(details, key) in products" v-bind:key="key" >
        <product-details v-bind:product-details="details" />
      </div>
    </div>
  </div>
</template>

<script>
  import ProductDetails from './Product.vue'

  export default {
    name: "product-list",
    props: ['products'],
    components: {
      ProductDetails,
    },
  }
</script>
