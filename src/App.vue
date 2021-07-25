<template>
  <div id="app">
    <Header />
    <TodoInput v-bind:search="search" v-on:change-search="changeSearch" v-on:add-todo="addTodo" />
    <TodoList v-bind:search="search" v-bind:todos="todos" v-on:removeTodo="removeTodo" />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default {
  name: "App",
  components: {
    Header,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todos: [
        { id: 0, name: "Пить кровь у комаров", completed: true },
        { id: 1, name: "Валить преподавателей", completed: true },
        { id: 2, name: "Отчислять деканат", completed: true },
        { id: 3, name: "Сделать солнцу человеческий удар", completed: true },
        { id: 4, name: "Отправить повестку военкому", completed: true },
        { id: 5, name: "Принять PR Паше", completed: false },
      ],
      search: ""
    };
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
console.log("Добавьте 'dev' в список todos для получения отладочной информации")
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
