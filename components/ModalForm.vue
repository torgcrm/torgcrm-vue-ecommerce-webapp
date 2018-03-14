<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <section class="modal-card-body">
        <b-field label="Номер телефона">
          <b-input type="text"
                   value="+7"
                   maxlength="15">
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <span>Мы свяжемся с вами в ближайшее время</span> <button class="button is-primary" type="button" >Купить</button>
      </footer>
    </div>
  </form>
</template>

<script>
  import BField from "buefy/src/components/field/Field.vue";
  import BInput from "buefy/src/components/input/Input.vue";

  export default {
    components: {
      BInput,
      BField},
    name: "modal-form",
  }
</script>

<style scoped>

</style>
