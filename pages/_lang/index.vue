<template>
  <div>
    <h1>Simon Wuyts</h1>
    <p class="lead">{{ $t('home.introduction') }}</p>
  </div>
</template>

<script>
export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'home');
    store.commit('SET_LOGO_COLOR', '#FFF');
  },
  head() {
    return { title: this.$t('home.title') }
  }
}
</script>
