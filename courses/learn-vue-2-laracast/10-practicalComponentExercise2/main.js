"use strict";

Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <slot></slot>
        </div>
      </div>
      <button class="modal-close" @click="$emit('close')"></button>
    </div>
`,
  props: ['title', 'body'],
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    showModal() {
      return this.isVisible = true;
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
    showModal: false,
  }
});
