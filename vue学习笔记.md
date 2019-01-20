# 开始
#### 1、构建vue:

vue-cli
#### 2、基础例子：
html:
```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
js:
```js
var vm = new Vue({
  el: '#example',

  data: {
    message: 'Hello'
  },

  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }

  methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
})
```

#### 属性与方法
```js
vm.$data //属性
vm.$el    //属性
vm.$watch() {}//方法
```

#### 计算属性 与侦听器
计算属性computed，也有set属性
```js
fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
```
当需要在数据变化时执行异步或开销较大的操作时，
用watch会更好
#### 指令

v-if 指令将根据表达式的真假来插入/移除元素。
```js
<p v-if="seen">现在你看到我了</p>
```
绑定事件： 
```js
<a :href="url">...</a> //全写为on-bind:href
```
点击事件：
```js
<a @click="doSomething">...</a>
```