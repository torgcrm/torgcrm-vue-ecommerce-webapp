export const state = () => ({
  products: [],
});

export const mutations = {
  setCatalogProducts(state, products) {
    state.products = products;
  }
};

export const actions = {
  async getProductsByCatalogSlug({commit}, slug) {
    let {data} = await this.$axios.get('catalog/' + slug);
    commit('setCatalogProducts', data);
  }
};

