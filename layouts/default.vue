<template>
  <the-container>
    <the-logo
      class="c-logo"
      :color="logoColor"
    />
    <the-preview/>
    <the-content>
      <the-navigation/>
      <nuxt/>
    </the-content>
  </the-container>
</template>

<script>
import TheContainer from '~/components/TheContainer.vue';
import TheContent from '~/components/TheContent.vue';
import TheLogo from '~/components/TheLogo.vue';
import TheNavigation from '~/components/TheNavigation.vue';
import ThePreview from '~/components/ThePreview.vue';

export default {
  components: {
    TheContainer,
    TheContent,
    TheLogo,
    TheNavigation,
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
.c-logo {
  left: 4rem;
  position: absolute;
  top: 4rem;
  z-index: 5;
}
</style>
