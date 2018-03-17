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
  height: 45vh;
  min-height: 40rem;
  overflow: hidden;
  position: relative;
  transition: background-color 0.15s linear;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

@media (min-width: 53em) {
  .c-preview {
    flex: 1 1 50%;
    height: auto;
    max-width: 80rem;
  }
}
</style>
