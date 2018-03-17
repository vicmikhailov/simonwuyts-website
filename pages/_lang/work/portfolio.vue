<template>
  <div>
    <h1>{{ $t('cases.portfolio.title') }}</h1>
    <p
      class="lead"
      v-html="$t('cases.portfolio.introduction')"
    />
    <div v-html="$t('cases.portfolio.description')"/>
    <social-links/>
    <portal to="preview">
      <preview-image
        src="/images/work/portfolio-preview.png"
        src-retina="/images/work/portfolio-preview@2x.png"
        :width="666"
        :width-retina="1332"
        alt="Portfolio Website"
        align="right"
      />
    </portal>
  </div>
</template>

<script>
import PreviewImage from '~/components/PreviewImage.vue';
import SocialLinks from '~/components/SocialLinks.vue';

export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'portfolio');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#25303C');
  },
  head() {
    return { title: 'Portfolio' }
  },
  components: {
    PreviewImage,
    SocialLinks
  }
}
</script>
