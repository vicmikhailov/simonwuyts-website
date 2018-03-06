<template>
  <div>
    <h1>Case: GVA Archief</h1>
    <p>Introductie</p>
  </div>
</template>

<script>
export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'gva-archive');
    store.commit('SET_LOGO_COLOR', '#FFF');
  },
  head() {
    return { title: 'Case: GVA Archief' }
  }
}
</script>
