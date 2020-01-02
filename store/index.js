import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
  currentPost: null,
})

export const getters = {
  currentPost: state => state.currentPost,
}

export const mutations = {
  SET_CURRENT_POST: (state, payload) => {
    state.currentPost = payload
  },
}

export const actions = {
  async getPostBySlug({ commit }, { slug }) {
    const res = await axios.get(`http://portal-cmsapi.smobgame.com/api/faq/${slug}/`)
    commit('SET_CURRENT_POST', res.data.data)
  },
}
