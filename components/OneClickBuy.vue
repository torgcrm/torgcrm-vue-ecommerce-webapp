<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <section class="modal-card-body">
        <b-field label="Номер телефона">
          <b-input type="text"
                   v-model="phone"
                   value="+7"
                   maxlength="15">
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <span>Мы свяжемся с вами в ближайшее время</span>
        <button class="button is-primary" type="button" @click="clickToBuy" >Купить</button>
      </footer>
    </div>
  </form>
</template>

<script>
  import BField from "buefy/src/components/field/Field.vue";
  import BInput from "buefy/src/components/input/Input.vue";

  export default {
    name: "one-click-buy",
    methods: {
      clickToBuy() {
        let data = {"phone":this.phone, "productId": this.$store.state.oneClickProduct};
        this.$store.dispatch("product/buyOneClick", data);
        this.$emit('hideModal')
      }
    },
    components: {
      BInput,
      BField
    },
    data () {
      return {
        phone: '+7'
      }
    }
  }
</script>

<style scoped>

</style>
