<template>
  <svg width="80" height="80" :class="{'animate': shouldAnimate}">
    <defs>
      <mask id="logoMask">
        <circle cx="40" cy="40" r="40" fill="#FFF"/>
        <g stroke="#000" fill="none" stroke-linecap="round" stroke-width="3">
          <path class="logo-line" d="M22.482 48.793c-.635.721-.656 1.793.019 2.49l8.363 8.624C33.511 62.637 36.98 64 40.447 64s6.937-1.364 9.584-4.093c5.292-5.458 5.292-14.306 0-19.764l-8.386-8.646A1.78 1.78 0 0 0 40.428 31c-.43 0-.859.168-1.196.516l-8.368 8.627-8.381 8.65z"/>
          <path class="logo-line" d="M58.518 32.207c.635-.721.656-1.793-.019-2.49l-8.364-8.625C47.49 18.364 44.021 17 40.553 17c-3.468 0-6.937 1.364-9.584 4.093-5.292 5.458-5.292 14.306 0 19.764l8.386 8.646a1.78 1.78 0 0 0 1.217.497c.43 0 .859-.168 1.196-.516l8.367-8.627 8.382-8.65z"/>
        </g>
      </mask>
    </defs>
    <g fill="none">
      <circle class="logo" cx="40" cy="40" r="40" :fill="color" mask="url(#logoMask)"/>
    </g>
  </svg>
</template>

<script>
export default {
  computed: {
    shouldAnimate() {
      return this.$store.state.homepage;
    }
  },
  props: {
    color: {
      type: String,
      default: '#FFF'
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes lineAnimation {
  100% {
    stroke-dashoffset: 0;
  }
}

.animate .logo-line {
  animation: 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000) 1 0.3s both lineAnimation;
  stroke-dasharray: 97, 97;
  stroke-dashoffset: 97;
}
</style>
