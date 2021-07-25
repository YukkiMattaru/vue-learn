<template>
  <section class="todo__input">
    <form @submit.prevent="onSubmit">
      <input
        id="input-todo"
        v-model="newTodo"
        v-on:input="changeSearch"
        :placeholder="
          placeHolders[Math.floor(Math.random() * placeHolders.length)]
        "
      />
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      placeHolders: [
        "Покушац...",
        "Поп ит...",
        "Поспать...",
        "Просрать дедлайн...",
        "Встретиться с другом в 8:45...",
        "Не умереть с голода...",
        "Сделать todolist...",
        "Еще немного поспать...",
        "Почитать книжецку...",
        "Полить цветочки...",
        "Покормить кота...",
        "Купить два литра пива, рыбку и чипсеки...",
      ],
      newTodo: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.newTodo) {
        const newTodo = {
          id: Date.now(),
          name: this.newTodo,
          completed: false,
        };
        this.$emit("add-todo", newTodo);
        this.$emit("change-search", "");
        this.newTodo = "";
      }
    },
    changeSearch() {
      this.$emit("change-search", this.newTodo);
    },
  },
};
</script>

<style scoped>
.todo__input {
  width: 100%;
  background: white;
  border-bottom: 1px solid #dde0e6;
  padding: 25px 0px;
}
form {
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
input {
  flex-grow: 1;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  height: 50px;
  padding: 0 10px;
  font-size: 24px;
  letter-spacing: 0.015em;
  border-radius: 5px;
  margin-right: 10px;
}
button {
  width: 100px;
}
</style>