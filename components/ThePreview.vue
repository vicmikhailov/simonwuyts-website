<template>
  <div class="c-sidepanel">
    <slot/>
  </div>
</template>

<style lang="scss">
@import '../css/colors';
.c-sidepanel {
  background: $blue-500;
  flex: 1;
  width: 50%;
}
</style>
