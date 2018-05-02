// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// var ace = require('brace')
// require('brace/mode/html')
// require('brace/theme/monokai')
require(['emmet/emmet'],function (data) { // this is huge. so require it async is better
  window.emmet = data.emmet
});
import * as ace from 'brace'
import 'brace/mode/html'
import 'brace/theme/github'
import 'brace/ext/emmet'
// var editor = ace.edit('javascript-editor');
// editor.getSession().setMode('ace/mode/javascript');
// editor.setTheme('ace/theme/monokai');
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
