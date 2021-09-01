// import * as mutationTypes from '../constants/mutations'
// import * as actionTypes from '../constants/actions'

export default {
  state: () => ({
    theme: 'default',
    dark: false
  }),

  getters: {
    getTheme: (state) => {
      return state.theme
    },
    getDark: (state) => {
      return state.dark
    }
  },

  mutations: {
    setTheme (state, theme) {
      localStorage.setItem('theme', state.theme = theme)
    },
    setDark (state, dark) {
      localStorage.setItem('dark', state.dark = dark)
    }
  },

  actions: {
    changeTheme ({ commit }, theme) {
      commit('setTheme', theme)
    },
    changeDark ({ commit }, dark) {
      commit('setDark', dark)
    }
  }
}
