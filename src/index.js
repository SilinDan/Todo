import Vue from 'vue'
import App from './app.vue'
import Vuex from "vuex";
import { Button, Input, MessageBox } from 'element-ui';
import todoModules from './modules/todos';
import VueRouter from 'vue-router';
import './styles/global.styl';
import router from './routes';

const root = document.createElement('div')
document.body.appendChild(root)

Vue.component(MessageBox.name, MessageBox);
Vue.use(Button);
Vue.use(Input);
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

const store = new Vuex.Store({
  modules: {
    todoModules
  }
})


new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount(root)