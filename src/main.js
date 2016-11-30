import Vue from 'vue'
import VueInstantLoadingSpinner from '../'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { VueInstantLoadingSpinner },
  methods: {
    test: function () {
      this.$refs.Spinner.show();
      setTimeout(function () {
        this.$refs.Spinner.hide();
      }.bind(this), 2000);
    }
  }
});
