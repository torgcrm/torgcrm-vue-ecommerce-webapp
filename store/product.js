export const state = () => ({
  details: [],
});

export const mutations = {
  setProductBySlug(state, details) {
    state.details = details;
  }
};

export const actions = {
  async getProductBySlug({commit}, slug) {
    let {data} = await this.$axios.get('products/slug/' + slug);
    commit('setProductBySlug', data);
  },
  async getProductsByCatalogSlug({commit}, slug) {
    let {data} = await this.$axios.get('products/catalog/' + slug);
    commit('setProductBySlug', data);
  }
};

