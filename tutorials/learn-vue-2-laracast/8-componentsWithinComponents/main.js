"use strict";

Vue.component('task-list', {
  template: `
  <div>
    <task v-for="task in tasks">{{ task.name }} </task>
   </div>
`,
  data() {
    return {
      tasks: [
        { name: 'Go to the store', complete: true },
        { name: 'Go to the email', complete: false },
        { name: 'Go to the farm', complete: true },
        { name: 'Go to work', complete: false },
      ]
    };
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root',
  data: {
    visible: true,
  }
});
