<template>
  <div>
    <h1>{{ $t('work.title') }}</h1>
    <p class="lead">{{ $t('work.introduction') }}</p>
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
