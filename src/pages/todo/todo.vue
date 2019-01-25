<template>
  <section class="real-app">
    <input
      type="text"
      @keyup.enter="insertTodo"
      class="add-input"
      autofocus="autofocus"
      placeholder="还有什么要做的事情呢？"
    >
    <Item
      :todo="todo"
      @del="spliceTodo"
      v-for="todo in todoList"
      :key="todo.id"
      @edit="changeTodo"
    />
    <Tabs
      :filter="filter"
      @toggle="toggleFilter"
      @clearAllCompeleted="clearAllCompeleted"
      :todos="todoList"
    />
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Item from "./components/item.vue";
import Tabs from "./components/tabs.vue";

let id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: "all"
    };
  },
  created() {
    this.fetchTodoList();
  },
  methods: {
    ...mapActions("todoModules", {
      fetchTodoList: "fetchTodoList", // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
      addTodo: "addTodo",
      deleteTodo: "deleteTodo",
      editTodo: "editTodo"
    }),

    insertTodo(e) {
      this.addTodo(e.target.value);
    },
    spliceTodo(id) {
      this.deleteTodo(id);
    },
    changeTodo(id, completed, content) {
      let obj = {};
      obj.id = id;
      obj.completed = completed;
      obj.content = content;
      this.editTodo(obj);
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompeleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  },
  computed: {
    ...mapState("todoModules", {
      todoList: state => state.todoList
    }),
    filterTodos() {
      if (this.filter == "all") {
        return this.todos;
      }
      if (this.filter == "active") {
        return this.todos.filter(todo => !todo.completed);
      } else {
        return this.todos.filter(todo => todo.completed);
      }
    }
  },
  components: {
    Item,
    Tabs
  }
};
</script>

<style lang="stylus" scoped>
.real-app {
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>


