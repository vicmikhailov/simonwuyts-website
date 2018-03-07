<template>
  <div>
    <h1>{{ $t('services.title') }}</h1>
    <p class="lead">{{ $t('services.introduction') }}</p>
    <div>
      <div>
        <h2>{{ $t('services.web.title') }}</h2>
        <p>{{ $t('services.web.description') }}</p>
      </div>
      <div>
        <h2>{{ $t('services.mobile.title') }}</h2>
        <p>{{ $t('services.mobile.description') }}</p>
      </div>
      <div>
        <h2>{{ $t('services.prototyping.title') }}</h2>
        <p>{{ $t('services.prototyping.description') }}</p>
      </div>
      <div>
        <h2>{{ $t('services.frontend.title') }}</h2>
        <p>{{ $t('services.frontend.description') }}</p>
      </div>
      <div>
        <h2>{{ $t('services.animation.title') }}</h2>
        <p>{{ $t('services.animation.description') }}</p>
      </div>
      <div>
        <h2>{{ $t('services.consultancy.title') }}</h2>
        <p>{{ $t('services.consultancy.description') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'services');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#0076FF');
  },
  head() {
    return { title: this.$t('services.title') }
  }
}
</script>
