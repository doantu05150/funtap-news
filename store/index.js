import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
  auth: null,
  currentPost: null,
})

export const getters = {
  auth: state => state.auth,
  currentPost: state => state.currentPost,
}

export const mutations = {
  SET_AUTH: (state, auth) => {
    state.auth = auth
  },
  SET_CURRENT_POST: (state, payload) => {
    state.currentPost = payload
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
  async getPostBySlug({ commit }, { slug }) {
    const res = await axios.get(`http://portal-cmsapi.smobgame.com/api/faq/${slug}`)
    commit('SET_CURRENT_POST', res.data.data)
  },
}
