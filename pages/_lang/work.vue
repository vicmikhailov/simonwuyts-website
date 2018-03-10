<template>
  <div>
    <h1>{{ $t('work.title') }}</h1>
    <p class="lead">{{ $t('work.introduction') }}</p>
    <h2>Cases</h2>
    <p>
      <nuxt-link
        :to="$i18n.path('cases/gva-archief')"
        exact
      >
        {{ $t('cases.archive.title') }}
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'work');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#0076FF');
  },
  head() {
    return { title: this.$t('work.title') }
  }
}
</script>
