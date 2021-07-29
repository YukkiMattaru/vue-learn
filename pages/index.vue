<template>
  <div id="app">
    <TodoInput @change-search="changeSearch" @add-todo="addTodo" />
    <TodoList @removeTodo="removeTodo" />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import {store} from "@/store/index";
export default {
  name: "App",
  store,
  components: {
    TodoInput,
    TodoList,
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
    changeSearch(search) {
      this.search = search.trim().toLowerCase();
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0;
  color: #2d2f33;
  background: #f4f7fb;
}
</style>
