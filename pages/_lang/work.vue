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
  },
  head() {
    return { title: this.$t('work.title') }
  }
}
</script>
