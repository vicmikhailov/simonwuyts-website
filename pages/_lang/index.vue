<template>
  <div>
    <h1>Simon Wuyts</h1>
    <p>{{ $t('home.introduction') }}</p>
  </div>
</template>

<script>
export default {
  fetch({store}) {
    store.commit('SET_HOMEPAGE', true);
  },
  head() {
    return { title: this.$t('home.title') }
  }
}
</script>
