<template>
  <div>
    <h1>Simon Wuyts</h1>
    <p
      class="lead"
      v-html="$t('home.introduction')"
    />
    <social-links/>
  </div>
</template>

<script>
import PreviewImage from '~/components/PreviewImage.vue';
import SocialLinks from '~/components/SocialLinks.vue';

export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'home');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#C9C8C1');
    store.commit('SET_PREVIEW_IMAGE', {
      src: '/images/simon-home.jpg',
      srcRetina: '/images/simon-home@2x.jpg',
      width: 666,
      widthRetina: 1332,
      alt: 'Simon Wuyts, Interaction Designer',
      align: 'full',
      verticalOffset: 0
    });
  },
  head() {
    return {
      title: this.$t('home.title')
    }
  },
  components: {
    PreviewImage,
    SocialLinks
  }
}
</script>
