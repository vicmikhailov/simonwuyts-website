<template>
  <div>
    <h1>{{ $t('about.title') }}</h1>
    <p>{{ $t('about.description') }}</p>
  </div>
</template>

<script>
export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'about');
  },
  head() {
    return { title: this.$t('about.title') }
  }
}
</script>
