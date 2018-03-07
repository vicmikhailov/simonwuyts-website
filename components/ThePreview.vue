<template>
  <div
    class="c-preview"
    :style="{backgroundColor: previewColor}"
  >
    <transition name="fade">
      <portal-target
        name="preview"
        slim
      />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    previewColor() {
      return this.$store.state.previewColor;
    }
  }
}
</script>


<style lang="scss">
@import '../css/colors';
.c-preview {
  overflow: hidden;
  flex: 1;
  position: relative;
  transition: background-color 0.15s linear;
  width: 50%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
