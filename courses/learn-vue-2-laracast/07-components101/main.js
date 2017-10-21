"use strict";

Vue.component('task-list', {
  template: '<div><ul><slot></slot></ul></div>'
})

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root',
  data: {
    visible: true,
  }
});