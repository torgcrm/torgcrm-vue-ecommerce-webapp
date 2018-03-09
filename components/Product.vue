<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <a v-bind:href="'product/' + productDetails.slug">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </a>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <a v-bind:href="'product/' + productDetails.slug"
             class="product-title-link title is-5">{{productDetails.title}}</a>
        </div>
      </div>

      <div class="content">
        {{productDetails.description}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product",
    props: ['product-details'],
  }
</script>

<style scoped>
  a.product-title-link:hover {
    text-decoration: underline;
  }
</style>
