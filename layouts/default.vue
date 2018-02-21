<template>
  <div>
    <header>
      <logo :color="logoColor"/>
      <div>
        <nav >
          <nuxt-link :to="$i18n.path('')" active-class="active" exact>
            {{ $t('links.home') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('services')" active-class="active" exact>
            {{ $t('links.services') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('work')" active-class="active" exact>
            {{ $t('links.work') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('about')" active-class="active" exact>
            {{ $t('links.about') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('contact')" active-class="active" exact>
            {{ $t('links.contact') }}
          </nuxt-link>
          <nuxt-link v-if="$i18n.locale === 'en'" :to="`/nl` + $route.fullPath" exact>NL</nuxt-link>
          <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" exact>EN</nuxt-link>
        </nav>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
export default {
  computed: {
    logoColor () {
      return this.$store.state.logoColor
    }
  },
  components: {
    logo: Logo
  }
}
</script>

<style lang="scss" scoped>
a.active {
  color: red;
}
</style>
