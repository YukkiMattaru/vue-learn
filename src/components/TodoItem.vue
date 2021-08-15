<template>
  <div v-if="!search || todo.name.toLowerCase().indexOf(search) !== -1" class="todo__item">
    <li>
      <div class="todo__info">
        <input
          type="checkbox"
          v-model="todo.completed"
          class="mr-3 ml-3"
        />
        <div v-if="!editMode" v-bind:class="{ done: todo.completed }">
          {{ index + 1 }}. {{ todo.name }}
        </div>
        <div v-else>
          <input type="text" v-model="todo.name">
        </div>
      </div>
      <div>
      <button type="button" class="btn btn-primary" v-on:click="editMode = !editMode">
        <i class="fa fa-edit"></i>
      </button>
      <button type="button" v-on:click="$emit('remove-todo', todo.id)" class="btn btn-danger">
        <i class="fa fa-trash"></i>
      </button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editMode: false
    }
  },
  props: ["todo", "index", "search"],
};
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