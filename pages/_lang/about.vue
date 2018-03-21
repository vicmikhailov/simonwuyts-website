<template>
  <div>
    <h1>{{ $t('about.title') }}</h1>
    <p class="lead">{{ $t('about.introduction') }}</p>
    <div v-html="$t('about.description')"/>
    <social-links/>
  </div>
</template>

<script>
import PreviewImage from '~/components/PreviewImage.vue';
import SocialLinks from '~/components/SocialLinks.vue';

export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'about');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#AFD1D8');
    store.commit('SET_PREVIEW_IMAGE', {
      src: '/images/simon-about.jpg',
      srcRetina: '/images/simon-about@2x.jpg',
      width: 666,
      widthRetina: 1332,
      alt: 'Simon Wuyts, Interaction Designer',
      align: 'full',
      verticalOffset: 0
    });
  },
  head() {
    return {
      title: this.$t('about.title')
    }
  },
  components: {
    PreviewImage,
    SocialLinks
  }
}
</script>
