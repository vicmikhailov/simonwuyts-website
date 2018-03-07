<template>
  <the-container>
    <the-logo
      class="c-logo"
      :color="logoColor"
    />
    <the-preview/>
    <the-content>
      <nuxt/>
    </the-content>
  </the-container>
</template>

<script>
import TheContainer from '~/components/TheContainer.vue';
import TheContent from '~/components/TheContent.vue';
import TheLogo from '~/components/TheLogo.vue';
import ThePreview from '~/components/ThePreview.vue';

export default {
  components: {
    TheContainer,
    TheContent,
    TheLogo,
    ThePreview
  },
  computed: {
    logoColor () {
      return this.$store.state.logoColor;
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;
  height: 100%;
}

body {
  font: 1.6rem/2.4rem 'bagatela', sans-serif;
  height: 100%;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.page-enter-to,
.page-leave {
  opacity: 1;
  transform: translateX(0);
}

.page-enter {
  transform: translateY(0.8rem);
}

.page-leave-to {
  transform: translateY(-0.8rem);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.15s ease-in-out;
}

.c-logo {
  left: 4rem;
  position: absolute;
  top: 4rem;
  z-index: 5;
}
</style>
