export const state = () => ({
  products: [],
  topMenu: [],
  leftMenu: [],
  catalogMenu: [],
  cart: [],
});

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setTopMenu(state, menu) {
    state.topMenu = menu
  },
  setLeftMenu(state, menu) {
    state.leftMenu = menu
  },
  setCart(state, cart) {
    state.cart = cart
  },
  setCatalogMenu(state, catalog) {
    state.catalogMenu = catalog
  }
};

export const actions = {
  async addToCart({commit}) {
    let cart = [{title: 'title'}];
    commit('setCart', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(JSON.parse(localStorage.getItem('cart')));
  },
  async nuxtClientInit({commit}) {
    // localStorage.setItem('hello', 'hel12312312312312lo');
    // commit('setProducts', [{title: localStorage.getItem('hello')}]);
  },
  async nuxtServerInit({dispatch, req}) {
    await dispatch('getTopMenu');
    await dispatch('getLeftMenu');
    await dispatch('getCatalog');
  },

  async getProducts({commit}) {
    let {data} = await this.$axios.get('products');
    commit('setProducts', data);
  },

  async getTopMenu({commit}) {
    let {data} = await this.$axios.get('menu/top');
    commit('setTopMenu', data);
  },

  async getLeftMenu({commit}) {
    let {data} = await this.$axios.get('menu/left');
    commit('setLeftMenu', data);
  },

  async getCatalog({commit}) {
    let {data} = await this.$axios.get('catalog');
    commit('setCatalogMenu', data);
  }
};
