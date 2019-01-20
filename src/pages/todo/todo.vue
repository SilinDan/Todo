<template>
  <section class="real-app">
    <input
      type="text"
      @keyup.enter="addTodo"
      class="add-input"
      autofocus="autofocus"
      placeholder="还有什么要做的事情呢？"
    >
    <Item :todo="todo" @del="deleteTodo" v-for="todo in filterTodos" :key="todo.id"/>
    <Tabs
      :filter="filter"
      @toggle="toggleFilter"
      @clearAllCompeleted="clearAllCompeleted"
      :todos="todos"
    />
  </section>
</template>

<script>
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
  methods: {
    getTodo() {
      getAjaxListTodo();
    },
    addTodo(e) {
      if (e.target.value == "") {
        return false;
      } else {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(), //trim()移除两侧空格
          completed: false
        }); //unshift插入在数组的第一项
        e.target.value = "";
      }
    },
    deleteTodo(id) {
      //查找到todo.id等于接受的id的那条数据,删除1个节点
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompeleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  },
  computed: {
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


