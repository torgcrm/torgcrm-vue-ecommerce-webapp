<template>
  <div class="card product-card">
    <div class="card-image">
      <figure class="image is-4by3">
        <a v-bind:href="'/product/' + productDetails.slug">
          <img src="https://static-eu.insales.ru/images/products/1/1557/133170709/svetyaschiysya-magic-tracks-366-detaley-2-gonochnyh-mashink-1.jpg" alt="Placeholder image">
        </a>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <a v-bind:href="'/product/' + productDetails.slug"
             class="product-title-link title is-5">{{productDetails.title}}</a>
        </div>
      </div>
      <div class="content">
        {{productDetails.description}}
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item add-to-cart">
        <span>✨ В корзину</span>
      </a>
      <a class="card-footer-item one-click-buy" @click="$emit('buyOneClick', productDetails.id)">
        <span>Купить 😻</span>
      </a>
    </footer>
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
