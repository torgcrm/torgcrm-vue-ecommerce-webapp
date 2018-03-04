import Vuex from 'vuex'
import axios from '../plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: []
    },
    mutations: {
      setProducts: (state, products) => {
        state.products = products
      },
    },
    actions: {
      async getProducts({commit}) {
        let {data} = await axios.get('products')
        commit('setProducts', data)
      },
    }
  })
};

export default createStore
