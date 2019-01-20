import Vue from 'vue';
/*引入资源请求插件*/
import axios from 'axios';

/*使用axios插件*/
Vue.prototype.$axios = axios;

function getAjax() {
    this.$axios.get('../api/addTodo.php')
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}