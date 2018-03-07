<template>
  <img
    class="c-preview-image"
    :class="alignClass"
    :src="src"
    :srcset="srcSet"
    :alt="alt"
    :width="width"
    :style="offsetStyles"
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
      required: true
    },
    srcRetina: {
      type: String,
      default: null
    },
    widthRetina: {
      type: Number,
      default: null
    },
    horizontalOffset: {
      type: Number,
      default: 0
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
    },
    offsetStyles() {
      if(this.horizontalOffset > 0 && this.align === 'center') {
        return {
          transform: `translate(-50%, ${(50 - this.horizontalOffset) * -1}%)`
        }
      } else {
        return {}
      }
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

.c-preview-image--center {
  left: 50%;
  max-width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>


