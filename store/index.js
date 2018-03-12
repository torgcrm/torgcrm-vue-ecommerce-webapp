export const state = () => ({
  products: [],
  topMenu: [],
  leftMenu: [],
  catalogMenu: [],
  cart: [],
  project: undefined,
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
  },
  setCurrentProject(state, project) {
    state.project = project;
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
  async nuxtServerInit({dispatch}) {
    await dispatch('getTopMenu');
    await dispatch('getLeftMenu');
    await dispatch('getCatalog');
    await dispatch('getCurrentProject');
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
  },
  async getCurrentProject({commit}) {
    let {data} = await this.$axios.get('project');
    commit('setCurrentProject', data);
  },
};
