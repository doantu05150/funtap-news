import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
  homeQuestions: [],
})

export const getters = {
  homeQuestions: state => state.homeQuestions,
}

export const mutations = {
  SET_HOME_QUESTIONS: (state, data) => {
    state.homeQuestions = data
  },
}

export const actions = {
  getHomeQuestions: ({ commit }) => {
    axios.get('http://portal-cmsapi.smobgame.com/api/faq-home').then(res => {
      commit('SET_HOME_QUESTIONS', res.data.data)
    })
  },
}
