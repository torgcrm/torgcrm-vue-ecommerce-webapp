import Vuex from 'vuex'
import axios from '../plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
      topMenu: [],
      leftMenu: []
    },
    mutations: {
      setProducts: (state, products) => {
        state.products = products
      },
      setTopMenu: (state, menu) => {
        state.topMenu = menu
      },
      setLeftMenu: (state, menu) => {
        state.leftMenu = menu
      }
    },
    actions: {
      async getProducts({commit}) {
        let {data} = await axios.get('products');
        commit('setProducts', data);
      },
      async getTopMenu({commit}) {
        let {data} = await axios.get('menu/top');
        commit('setTopMenu', data);
      },
      async getLeftMenu({commit}) {
        let {data} = await axios.get('menu/left');
        commit('setLeftMenu', data);
      }
    }
  })
};

export default createStore
