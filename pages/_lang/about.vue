<template>
  <div>
    <h1>{{ $t('about.title') }}</h1>
    <p class="lead">{{ $t('about.introduction') }}</p>
    <div v-html="$t('about.description')"></div>
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
