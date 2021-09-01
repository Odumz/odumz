// import portfolio from './modules/portfolio'
// import theme from './modules/theme'

// const store = createStore({
//   modules: {
//     portfolio,
//     theme
//   }
// })

// export default store

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
