
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    currentSideBarMenu: 0
  },
  mutations: {
    changeMenuIndex (state, newIndex) {
      state.currentSideBarMenu = newIndex;
    }
  }
})

export default store