// import * as mutationTypes from '../constants/mutations'
// import * as actionTypes from '../constants/actions'

export const state = () => ({
  hover: false
})

export const mutations = {
  changeHover (state) {
    state.hover = !state.hover
  }
}

// export default {
//   state: () => ({
//     hover: false
//   }),

//   getters: {
//     getHover: (state) => {
//       return state.hover
//     }
//   },

//   mutations: {
//     setHover (state, payload) {
//       state.hover = payload
//     }
//   }

// actions: {
//   changeHover ({ commit }, payload) {
//     commit(setHover, payload)
//   }
// }
// }
