import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userName: ''
}

const getters = {
  getUserName: state => state.userName
}

const mutations = {
  setUserName(state, newUserName) {
    state.userName = newUserName
  }
}

const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
