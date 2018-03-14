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
            <section class="section product-main-section">
              <div class="columns">
                <div class="column is-4">
                  <img
                    src="https://static-eu.insales.ru/images/products/1/1557/133170709/svetyaschiysya-magic-tracks-366-detaley-2-gonochnyh-mashink-1.jpg"
                    alt="Placeholder image">
                </div>
                <div class="column">
                  <div class="tile is-parent is-vertical">
                    <div class="tile is-child notification ">
                      <h1 class="title">{{ProductDetails.viewName}}</h1>
                      <p>Артикул: {{ProductDetails.article}}</p>
                      <p>Наличие: В наличии</p>
                    </div>

                    <div class="tile is-child notification is-warning">
                      <p><strong class="title">Цена: {{ProductDetails.price}} руб.</strong></p>
                      <p v-show="ProductDetails.oldPrice" class="old-price">Старая цена:
                        <span class="old-price-throw">{{ProductDetails.oldPrice}} руб.</span></p>
                    </div>

                    <div class="tile is-child">
                      <div class="level-item level-left">
                        <a @click="isComponentModalActive = true" class="button is-warning">Купить в один клик 😻</a>
                        <a class="button is-primary">В корзину ✨</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="section product-info-section">
              <div class="tabs">
                <ul>
                  <li class="is-active" href="#description"><a>Описание</a></li>
                </ul>
              </div>
              <div id="description">
                {{ProductDetails.seoText}}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>

    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <modal-form ></modal-form>
    </b-modal>
  </div>
</template>

<script>
  import AppLogo from '@/components/AppLogo.vue'
  import MainHeader from '@/components/MainHeader.vue'
  import ProductList from '@/components/ProductList.vue'
  import MainMenuLeft from '@/components/MainMenuLeft.vue'
  import MainMenuHeader from '@/components/MainMenuHeader'
  import ModalForm from '@/components/ModalForm'
  import BModal from 'buefy/src/components/modal/Modal.vue'

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
      BModal,
      ModalForm
    }
  }
</script>

<style scoped>
  .product-main-section {
    padding-top: 0px !important;
    padding-bottom: 0px !important;;
  }
  .product-info-section {
    padding-top: 0px !important;
  }
  .button:first-child {
    margin-left: 0px;
  }
  .button {
    margin-left: 5px;
  }
  .old-price,
  .old-price-throw{
    opacity: 0.75;
  }
  .old-price-throw {
    text-decoration: line-through;
  }
</style>
