<template>
  <div>
    <h1>{{ $t('about.title') }}</h1>
    <p class="lead">{{ $t('about.introduction') }}</p>
    <div v-html="$t('about.description')"/>
    <portal to="preview">
      <preview-image
        src="/images/simon-about.jpg"
        src-retina="/images/simon-about@2x.jpg"
        :width="666"
        :width-retina="1332"
        alt="Simon Wuyts, Interaction Designer"
      />
    </portal>
  </div>
</template>

<script>
import PreviewImage from '~/components/PreviewImage.vue';

export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'about');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#AFD1D8');
  },
  head() {
    return { title: this.$t('about.title') }
  },
  components: {
    PreviewImage
  }
}
</script>
