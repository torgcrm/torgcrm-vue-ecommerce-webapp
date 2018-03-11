export const state = () => ({
  details: [],
});

export const mutations = {
  setPageDetails(state, details) {
    state.details = details;
  }
};

export const actions = {
  async getPageDetails({commit}, slug) {
    let {data} = await this.$axios.get('pages/' + slug);
    commit('setPageDetails', data);
  }
};

