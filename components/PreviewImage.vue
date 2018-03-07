<template>
  <img
    class="c-preview-image"
    :class="alignClass"
    :src="src"
    :srcset="srcSet"
    :alt="alt"
  >
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'full'
    },
    src: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: null
    },
    srcRetina: {
      type: String,
      default: null
    },
    widthRetina: {
      type: Number,
      default: null
    }
  },
  computed: {
    srcSet() {
      let srcSet = `${this.src} ${this.width}w`;
      if (this.srcRetina !== null && this.widthRetina !== null) {
        srcSet += `, ${this.srcRetina} ${this.widthRetina}w`;
      }
      return srcSet;
    },
    alignClass() {
      const alignClasses = {
        full: 'c-preview-image--full',
        center: 'c-preview-image--center',
      };
      return alignClasses[this.align];
    }
  }
}
</script>

<style lang="scss">
.c-preview-image--full {
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>


