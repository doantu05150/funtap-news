import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  auth: null,
})

export const getters = {
  auth: state => state.auth,
}

export const mutations = {
  SET_AUTH: (state, auth) => {
    state.auth = auth
  },
}

export const actions = {
  login: ({ commit }, payload) => {
    const auth = 'xxxxx'
    commit('SET_AUTH', auth)
    if (auth) {
      payload.router.push('/sercet')
    }
  },
}
