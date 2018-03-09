<template>
  <div class="level-right has-text-centered">
    <p class="level-item" v-for="item in menu.menuItems" v-bind:key="item.id">
      <a v-bind:href="'/page/' + item.slug">{{item.name}}</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: "main-menu-header",
    props: ['menu']
  }
</script>
