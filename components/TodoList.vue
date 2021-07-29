<template>
  <section class="todo__list">
    <h2>Мои дела</h2>
    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :index="index"
        :todo="todo"
        @remove-todo="removeTodo"
      />
    </ul>
    <p v-if="todos.some((t) => t.name === 'dev')">
      Todos: {{ todos }} Search: {{ search }}
    </p>
  </section>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  components: {
    TodoItem,
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
    search() {
      return this.$store.getters.search;
    }
  },
  methods: {
    removeTodo(id) {
      this.$store.commit('DELETE_TODO', id)
    },
  },
}
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