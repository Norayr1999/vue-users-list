import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const endpoints = {
    users: 'https://jsonplaceholder.typicode.com/users',
}

export default new Vuex.Store({
    state: {
      users: [],
      usersLoading: false,
    },
    mutations: {
      set(state, [prop, val]) {
        state[prop] = val
0      },
    },
    actions: {
      loadUsers({ commit }) {
          commit('set', ['usersLoading', true])
          axios.get(endpoints.users).then(({ data }) => {
              commit('set', ['users', data])
          }).finally(() => {
              commit('set', ['usersLoading', false])
          })
      }
    }
  })