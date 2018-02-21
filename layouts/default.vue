<template>
  <div>
    <header>
      <div>
        <nav >
          <nuxt-link :to="$i18n.path('')" exact>
            {{ $t('links.home') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('services')" exact>
            {{ $t('links.services') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('work')" exact>
            {{ $t('links.work') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('about')" exact>
            {{ $t('links.about') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('contact')" exact>
            {{ $t('links.contact') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" v-if="$i18n.locale === 'en'" :to="`/nl` + $route.fullPath" active-class="none" exact>NL</nuxt-link>
          <nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>EN</nuxt-link>
        </nav>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<script>
export default {}
</script>
