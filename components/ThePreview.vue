<template>
  <div class="sidepanel">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
@import '../css/colors';
.sidepanel {
  background: $blue-500;
  flex: 1;
  width: 50%;
}
</style>
