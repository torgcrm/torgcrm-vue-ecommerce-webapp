<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-4" v-for="(details, key) in products" v-bind:key="key" >
        <product-details @buyOneClick="buyOneClick" v-bind:product-details="details" />
      </div>
    </div>

    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <modal-form></modal-form>
    </b-modal>
  </div>
</template>

<script>
  import ProductDetails from './Product.vue'
  import ModalForm from '@/components/ModalForm'
  import BModal from 'buefy/src/components/modal/Modal.vue'

  export default {
    name: "product-list",
    props: ['products'],
    components: {
      ProductDetails,
      ModalForm,
      BModal
    },
    methods: {
      buyOneClick(id) {
        this.isComponentModalActive = true;
      }
    },
    data() {
      return {
        isComponentModalActive: false,
      }
    }
  }
</script>
