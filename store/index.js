import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [],
    search: ""
  },
  getters: {
    todos: (state) => {
      return state.todos
    },
    search: (state) => {
      return state.search
    }
  },
  mutations: {
    SET_TODOS: (state, payload) => {
      state.todos = payload;
    },
    ADD_TODO: (state, payload) => {
      state.todos.push(payload)
    },
    DELETE_TODO: (state, index) => {
      state.todos.filter(todo => todo.id !== index)
    },
    EDIT_TODO: (state, payload) => {
      state = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          console.log(payload)
          return {
            id: todo.id,
            name: payload.name,
            completed: todo.completed
          }
        }
        return todo
      })
    },
    SET_SEARCH: (state, text) => {
      state.search = text
    }
  }
})