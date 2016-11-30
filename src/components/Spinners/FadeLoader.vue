<template>
  <div class="v-spinner" v-bind:style="{position: 'relative', fontSize: 0}" v-show="loading">
  <!-- <div class="v-spinner" v-bind:style="containerStyle"> -->
    <div class="v-fadez v-fadez1" v-bind:style="[spinnerStyle,animationStyle1]">
    </div><div class="v-fadez v-fadez2" v-bind:style="[spinnerStyle,animationStyle2]">
    </div><div class="v-fadez v-fadez3" v-bind:style="[spinnerStyle,animationStyle3]">
    </div><div class="v-fadez v-fadez4" v-bind:style="[spinnerStyle,animationStyle4]">
    </div><div class="v-fadez v-fadez5" v-bind:style="[spinnerStyle,animationStyle5]">
    </div><div class="v-fadez v-fadez6" v-bind:style="[spinnerStyle,animationStyle6]">
    </div><div class="v-fadez v-fadez7" v-bind:style="[spinnerStyle,animationStyle7]">
    </div><div class="v-fadez v-fadez8" v-bind:style="[spinnerStyle,animationStyle8]">
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'FadeLoader',

  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: { 
      type: String,
      default: '#5dc596'
    },
    height: {
      type: String,
      default: '15px'
    },
    width: {
      type: String,
      default: '5px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '20px'
    }
  },
  data () {
    return {
      spinnerStyle: {
      	backgroundColor: this.color,
      	height: this.height,
     		width: this.width,
      	margin: this.margin,
      	borderRadius: this.radius
      },
      leftOffset: 100
    }
  },
  computed: {
    ngRadius () {
      return '-' + this.radius
    },
    newRadius () {
      return parseFloat(this.radius)
    },
    quarter () {
      return (parseFloat(this.radius)/2 + parseFloat(this.radius)/5.5) + 'px'
    },
    newQuarter () {
      return (parseFloat(this.radius)/2 + parseFloat(this.radius)/5.5)
    },
    ngQuarter () {
      return '-' + this.quarter
    },
    animationStyle1 () {
      return {
        top: this.radius,
        left: this.leftOffset + 'px',
        // left: 0,
        animationDelay: '0.12s'
      }
    },
    animationStyle2 () {
      return {
        top: this.quarter,
        // left: this.quarter,
        left: (this.leftOffset + this.newQuarter) + 'px',
        animationDelay: '0.24s',
        transform: 'rotate(-45deg)'
      }
    },
    animationStyle3 () {
      return {
        top: 0,
        // left: this.radius,
        left: (this.leftOffset + this.newRadius) + 'px',
        animationDelay: '0.36s',
        transform: 'rotate(90deg)'
      }
    },
    animationStyle4 () {
      return {
        top: this.ngQuarter,
        // left: this.quarter,
        left: (this.leftOffset + this.newQuarter) + 'px',
        animationDelay: '0.48s',
        transform: 'rotate(45deg)'
      }
    },
    animationStyle5 () {
      return {
        top: this.ngRadius,
        // left: 0,
        left: 'this.leftOffsetpx',
        animationDelay: '0.60s'
      }
    },
    animationStyle6 () {
      return {
        top: this.ngQuarter,
        // left: this.ngQuarter,
        left: (this.leftOffset + this.newQuarter * -1) + 'px',
        animationDelay: '0.72s',
        transform: 'rotate(-45deg)'
      }
    },
    animationStyle7 () {
      return {
        top: 0,
        // left: this.ngRadius,
        left: (this.leftOffset + this.newRadius * -1) + 'px',
        animationDelay: '0.84s',
        transform: 'rotate(90deg)'
      }
    },
    animationStyle8 () {
      return {
        top: this.quarter,
        left: (this.leftOffset + this.newQuarter * -1) + 'px',
        animationDelay: '0.96s',
        transform: 'rotate(45deg)'
      }
    }
  }

}
</script>

<style>

.v-spinner
{
  text-align: center;
}

.v-spinner .v-fadez
{
    -webkit-animation: v-fadezStretchDelay 1.2s infinite ease-in-out;
            animation: v-fadezStretchDelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
	          animation-fill-mode: both;
    position: absolute;               
    display: inline-block;
}

@-webkit-keyframes v-fadezStretchDelay
{
    50%
    {
        -webkit-opacity: 0.3;             
                opacity: 0.3;
    }
    100%
    {
        -webkit-opacity: 1;             
                opacity: 1;
    }
}

@keyframes v-fadezStretchDelay
{
    50%
    {
        -webkit-opacity: 0.3;             
                opacity: 0.3;
    }
    100%
    {
        -webkit-opacity: 1;             
                opacity: 1;
    }
}
</style>
