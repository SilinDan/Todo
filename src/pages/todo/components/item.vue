<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input type="checkbox" class="toggle" v-model="todo.completed" @change="toggleCompleted">
    <label class="label">{{todo.content}}</label>
    <el-button class="alter" @click="alterTodo" title="编辑"></el-button>
    <button class="destory" @click="deleteTodo" title="删除"></button>
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapActions("todoModules", {
      editTodo: "editTodo"
    }),
    deleteTodo() {
      this.$emit("del", this.todo.id); //用来触发事件
    },
    toggleCompleted() {
      this.$emit("edit", this.todo.id, this.todo.completed, this.todo.content);
    },
    alterTodo() {
      this.$prompt("添加备注", "编辑", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "添加失败"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "添加成功"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.todo-item {
  position: relative;
  background-color: #fff;
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  &:hover {
    .destory:after {
      content: '×';
    }
  }

  &:hover {
    .alter:after {
      content: '✍';
    }
  }

  label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }

  &.completed {
    label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }
}

.toggle {
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  outline: none;

  &:after {
    content: url('../../../assets/images/round.svg');
  }

  &:checked:after {
    content: url('../../../assets/images/done.svg');
  }
}

.destory {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background-color: transparent;
  appearance: none;
  border-width: 0;
  cursor: pointer;
  outline: none;
}

.alter {
  position: absolute;
  top: 0;
  right: 50px;
  bottom: 0;
  width: 40px;
  height: 37px;
  margin: auto 0;
  font-size: 20px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background-color: transparent;
  appearance: none;
  border-width: 0;
  cursor: pointer;
  outline: none;
}
</style>


