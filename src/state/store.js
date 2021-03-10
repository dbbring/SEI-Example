import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],
    users: [],
    albums: [],
  },
  mutations: {
    pushTodo (state, newTodo) {
      state.todos.push(newTodo);
    },
    pushUser (state, newUser) {
      state.users.push(newUser);
    },
    pushAlbum (state, newAlbum) {
      state.albums.push(newAlbum);
    }
  }
})

export default store