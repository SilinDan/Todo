import {
    fetchTodoList, addTodo, deleteTodo, editTodo
} from '../services/todos';

export default {
    namespaced: true,
    state: {
        todoList: [],
    },
    mutations: {
        save(state, { name, value }) {
            state[name] = value;
        }

    },
    actions: {
        fetchTodoList({ commit, state }, payload) {
            fetchTodoList().then((data) => {
                commit('save', {
                    name: 'todoList',
                    value: data.data.map((item) => ({
                        id: item.id,
                        content: item.name,
                        completed: !!(item.state * 1)
                    }))
                });
            });
        },

        addTodo({ commit, state, dispatch }, content) {
            addTodo(content).then((data) => {
                if (data.data * 1) {
                    dispatch('fetchTodoList');
                }
            })
        },

        deleteTodo({ commit, state, dispatch }, id) {
            deleteTodo(id).then((data) => {
                if (data) {
                    dispatch('fetchTodoList');
                }
            })
        },

        editTodo({ commit, state, dispatch }, obj) {
            let completedToState = (obj.completed * 1)
            editTodo(obj.id, completedToState, obj.content).then((data) => {
                if (data) {
                    dispatch('fetchTodoList');
                }
            })
        },


    }
};
