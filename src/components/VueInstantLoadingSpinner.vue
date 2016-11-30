<template>
    <transition name="fade-spinner" v-if="showModal">
        <div class="ini-spinner-mask">
            <div class="ini-spinner-content text-center">
                <component v-bind:is="spinnerStyle" :loading="loading" :color="color" :size="size" :margin="margin" :radius="radius">
                </component>
            </div>
            <!-- /.ini-spinner-content -->
        </div>
        <!-- /.ini-spinner-mask -->
    </transition>
</template>
<script>

import BeatLoader from './Spinners/BeatLoader.vue'
import BounceLoader from './Spinners/BounceLoader.vue'
import ClipLoader from './Spinners/ClipLoader.vue'
import DotLoader from './Spinners/DotLoader.vue'
import FadeLoader from './Spinners/FadeLoader.vue'
// import GridLoader from './Spinners/GridLoader.vue'
import MoonLoader from './Spinners/MoonLoader.vue'
// import PacmanLoader from './Spinners/PacmanLoader.vue'
import PulseLoader from './Spinners/PulseLoader.vue'
// import RingLoader from './Spinners/RingLoader.vue'
import RiseLoader from './Spinners/RiseLoader.vue'
// import RotateLoader from './Spinners/RotateLoader.vue'
// import ScaleLoader from './Spinners/ScaleLoader.vue'
// import SkewLoader from './Spinners/SkewLoader.vue'
// import SquareLoader from './Spinners/SquareLoader.vue'
import SyncLoader from './Spinners/SyncLoader.vue'

const componentsList = {
  'beat-loader': BeatLoader,
  // 'bounce-loader': BounceLoader,
  'clip-loader': ClipLoader,
  'dot-loader': DotLoader,
  'fade-loader': FadeLoader,
  // 'grid-loader': GridLoader,
  'moon-loader': MoonLoader,
  // 'pacman-loader': PacmanLoader,
  'pulse-loader': PulseLoader,
  // 'ring-loader': RingLoader,
  'rise-loader': RiseLoader,
  // 'rotate-loader': RotateLoader,
  // 'scale-loader': ScaleLoader,
  // 'skew-loader': SkewLoader,
  // 'square-loader': SquareLoader,
  'sync-loader': SyncLoader
}

export default {
  mounted () {
    // console.log('IniLoadingSpinner ready!');
  },
  props: {
    spinnerStyle: {
      type: String,
      default: 'rise-loader'
      // default: 'beat-loader'
      // default: 'dot-loader'
      // default: 'sync-loader'
      // default: 'pulse-loader'
    },
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      // default: '#429bf4' // calm
      default: '#5dc596' // green
    },
    size: {
      type: String,
      default: '25px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      // default: '20px'
      default: '100%'
    }
  },
  data () {
    var list = []
    return {
      notificationList: list,
      showModal: false
    }
  },
  components: componentsList,
  methods: {
    show: function () {
      this.showModal = true
    },
    hide: function () {
      this.showModal = false
    }
  }
}
</script>
<style>
.ini-spinner-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 100, 100, .1);
  display: block;
  transition: all .3s ease;
}

.ini-spinner-content {
  width: 200px;
  height: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  display: block;
  transition: all .3s ease;
}

.fade-spinner-enter {
  opacity: 0;
}

.fade-spinner-leave-active {
  opacity: 0;
}

.fade-spinner-enter .ini-spinner-content,
.fade-spinner-leave-active .ini-spinner-content {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
