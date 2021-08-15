<template>
  <section class="todo__list">
    <h2>Мои дела</h2>
    <ul>
      <TodoItem v-bind:search="search" v-bind:key="todo.id" v-bind:index="index" v-on:remove-todo="removeTodo" v-bind:todo="todo" v-for="(todo,index) in todos" />
    </ul>
    <p v-if="todos.some(t => t.name === 'dev')">Todos: {{todos}} Search: {{search}}</p>
  </section>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  props: ["todos", "search"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit("removeTodo", id);
    },
  },
};
</script>

<style scoped>
.todo__list {
  margin-bottom: 25px;
  padding: 20px 0px;
  border-bottom: 1px solid #dde0e6;
  box-sizing: border-box;
  background: white;
  width: 100%;
}
ul {
  display: flex;
  padding: 0px;
  list-style: none;
  flex-direction: column;
  align-items: center;
}
</style>