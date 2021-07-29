<template>
  <div
    v-if="!search || todo.name.toLowerCase().indexOf(search) !== -1"
    class="todo__item"
  >
    <li>
      <div class="todo__info">
        <input
          :completed="todo.completed"
          type="checkbox"
          class="mr-3 ml-3"
          @click.prevent="checkTodo"
        />
        <div v-if="!editMode" class="{ done: todo.completed }">
          {{ index + 1 }}. {{ todo.name }}
        </div>
        <div v-else>
          <input v-model="name" type="text" name="todo.name" />
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-primary" @click="editTodo">
        </button>
        <button
          type="button"
          class="btn btn-danger"
          @click="$emit('remove-todo', todo.id)"
        >
        </button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    todo: { type: Object, required: true },
    index: { type: Number, required: true },
  },
  data() {
    return {
      editMode: false,
      name: this.todo.name,
    }
  },
  computed: {
    search() {
      return this.$store.getters.search
    },
  },
  methods: {
    editTodo() {
      if (this.editMode) {
        const payload = { id: this.todo.id, name: this.name }
        this.$store.commit('EDIT_TODO', payload)
      }
      this.editMode = !this.editMode
    },
  },
}
</script>

<style scoped>
.todo__item {
  font-size: 18px;
  padding: 3px 10px;
  width: 80%;
  border: 1px solid #dde0e6;
}
.todo__info {
  display: flex;
  align-items: center;
}
.todo__info input {
  margin-right: 10px;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.done {
  text-decoration: line-through;
}
button {
  margin-left: 10px;
}
</style>