<template>
  <nav class="navigation">
    <nuxt-link
      :to="$i18n.path('')"
      class="navigation-link"
      active-class="active"
      exact
    >
      {{ $t('links.home') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('services')"
      class="navigation-link"
      active-class="active"
      exact
    >
      {{ $t('links.services') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('work')"
      class="navigation-link"
      active-class="active"
      exact
    >
      {{ $t('links.work') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('about')"
      class="navigation-link"
      active-class="active"
      exact
    >
      {{ $t('links.about') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('contact')"
      class="navigation-link"
      active-class="active"
      exact
    >
      {{ $t('links.contact') }}
    </nuxt-link>
    <nuxt-link
      v-if="$i18n.locale === 'en'"
      :to="`/nl` + $route.fullPath"
      class="navigation-language"
      exact
    >
      NL
    </nuxt-link>
    <nuxt-link
      v-else
      :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
      class="navigation-language"
      exact
    >
      EN
    </nuxt-link>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  font: 1.3rem/1 'adelle-sans', sans-serif;
  margin-bottom: 5.6rem;
}

.navigation-link,
.navigation-language {
  color: #8A99A0;
  text-decoration: none;
  text-transform: uppercase;
}

.navigation-link + .navigation-link {
  margin-left: 3.2rem;
}

.navigation-language {
  margin-left: auto;
}

.navigation-link.active {
  color: #262829;
  font-weight: 600;
}
</style>
