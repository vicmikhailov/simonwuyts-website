<template>
  <div>
    <h1>Simon Wuyts</h1>
    <p
      class="lead"
      v-html="$t('home.introduction')"
    />
    <portal to="preview">
      <preview-image
        src="/images/simon-home.jpg"
        src-retina="/images/simon-home@2x.jpg"
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
    store.commit('SET_PAGE', 'home');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#C9C8C1');
  },
  head() {
    return { title: this.$t('home.title') }
  },
  components: {
    PreviewImage
  }
}
</script>
