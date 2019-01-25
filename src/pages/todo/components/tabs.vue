<template>
  <div class="helper">
    <span class="left">{{unfinishedTodoNum}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter===state?'actived':'']"
        @click="toggleFilter(state)"
      >{{state}}</span>
    </span>
    <span class="clear" @click="clearAllCompeleted()">clearAllCompeleted</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      Type: String,
      required: true
    },
    todos: {
      Type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  computed: {
    //每次改变的时候就会计算
    unfinishedTodoNum() {
      return this.todos.filter(todo => !todo.completed).length;
      console.log(this.todos);
    }
  },
  methods: {
    toggleFilter(state) {
      this.$emit("toggle", state); //$emit增加监听事件
    },
    clearAllCompeleted() {
      this.$emit("clearAllCompeleted");
    }
  }
};
</script>
<style lang="stylus" scoped>
.helper {
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 30px;
  background-color: #fff;
  font-size: 14px;
  font-smoothing: antialiased;
}

.left, .clear, .tabs {
  padding: 0 10px;
  box-sizing: border-box;
}

.left, .clear {
  width: 150px;
}

.left {
  text-align: left;
}

.clear {
  text-align: right;
  cursor: pointer;
}

.tabs {
  width: 200px;
  display: flex;
  justify-content: space-around;

  * {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid rgba(175, 47, 47, 0);

    &.actived {
      border-color: rgba(216, 216, 216, 0.4);
      border-radius: 5px;
      box-shadow: 1px 1px 1px #969696;
    }
  }
}
</style>
