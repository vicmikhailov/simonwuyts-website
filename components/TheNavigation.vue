<template>
  <nav class="c-navigation">
    <nuxt-link
      :to="$i18n.path('')"
      class="c-navigation__item"
      active-class="c-navigation__item--active"
      exact
    >
      {{ $t('links.home') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('services')"
      class="c-navigation__item"
      active-class="c-navigation__item--active"
      exact
    >
      {{ $t('links.services') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('work')"
      class="c-navigation__item"
      active-class="c-navigation__item--active"
      exact
    >
      {{ $t('links.work') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('about')"
      class="c-navigation__item"
      active-class="c-navigation__item--active"
      exact
    >
      {{ $t('links.about') }}
    </nuxt-link>
    <nuxt-link
      :to="$i18n.path('contact')"
      class="c-navigation__item"
      active-class="c-navigation__item--active"
      exact
    >
      {{ $t('links.contact') }}
    </nuxt-link>
    <nuxt-link
      v-if="$i18n.locale === 'en'"
      :to="`/nl` + $route.fullPath"
      class="c-navigation__item c-navigation__item--language"
      exact
    >
      NL
    </nuxt-link>
    <nuxt-link
      v-else
      :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
      class="c-navigation__item c-navigation__item--language"
      exact
    >
      EN
    </nuxt-link>
  </nav>
</template>

<style lang="scss">
@import '../css/colors';
.c-navigation {
  display: flex;
  font: 1.3rem/1 'adelle-sans', sans-serif;
  margin-bottom: 5.6rem;
}

.c-navigation__item {
  color: $gray-400;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.1s linear;
  
  &:hover:not(.c-navigation__item--active) {
    color: $blue-500;
  }
}

.c-navigation__item + .c-navigation__item {
  margin-left: 3.2rem;
}

.c-navigation__item.c-navigation__item--language {
  margin-left: auto;
}

.c-navigation__item--active {
  color: $gray-900;
  font-weight: 600;
}
</style>
