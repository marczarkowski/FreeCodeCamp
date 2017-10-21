"use strict";

Vue.component('message', {
  template: `
  <article class="message" v-show="isVisible">
    <div class="message-header">
      <p>{{ title }}</p>
      <button class="delete" @click="hideModal"></button>
    </div>
    <div class="message-body">
    {{ body }}
    </div>
  </article>
`,
  props: ['title', 'body'],
  data() {
    return {
      tasks: [
        { name: 'Go to the store', complete: true },
        { name: 'Go to the email', complete: false },
        { name: 'Go to the farm', complete: true },
        { name: 'Go to work', complete: false },
      ],
      isVisible: true,
    };
  },
  methods: {
    hideModal() {
      return this.isVisible = false;
    }
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
