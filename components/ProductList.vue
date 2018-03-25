<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-4" v-for="(details, key) in products" v-bind:key="key" >
        <product-details @buyOneClick="buyOneClick" v-bind:product-details="details" />
      </div>
    </div>

    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <one-click-buy @hideModal="hideModal" />
    </b-modal>
  </div>
</template>

<script>
  import ProductDetails from './Product.vue'
  import OneClickBuy from '@/components/OneClickBuy'
  import BModal from 'buefy/src/components/modal/Modal.vue'

  export default {
    name: "product-list",
    props: ['products'],
    components: {
      ProductDetails,
      OneClickBuy,
      BModal
    },
    methods: {
      buyOneClick(id) {
        this.$store.commit('setOneClickProduct', id)
        this.isComponentModalActive = true
      },
      hideModal() {
        this.isComponentModalActive = false
      }
    },
    data() {
      return {
        isComponentModalActive: false,
      }
    }
  }
</script>
