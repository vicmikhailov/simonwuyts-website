<template>
  <div>
    <h1>{{ $t('cases.bedrock.title') }}</h1>
    <p
      class="lead"
      v-html="$t('cases.bedrock.introduction')"
    />
    <div v-html="$t('cases.bedrock.description')"/>
    <image-grid>
      <img
        src="/images/work/bedrock-1.png"
        srcset="/images/work/bedrock-1.png 268w, /images/work/bedrock-1@2x.png 536w"
        alt="Mobile Design"
      >
      <img
        src="/images/work/bedrock-2.png"
        srcset="/images/work/bedrock-2.png 268w, /images/work/bedrock-2@2x.png 536w"
        alt="Mobile Design"
      >
      <img
        src="/images/work/bedrock-3.png"
        srcset="/images/work/bedrock-3.png 268w, /images/work/bedrock-3@2x.png 536w"
        alt="Mobile Design"
      >
      <img
        src="/images/work/bedrock-4.png"
        srcset="/images/work/bedrock-4.png 268w, /images/work/bedrock-4@2x.png 536w"
        alt="Mobile Design"
      >
      <img
        src="/images/work/bedrock-5.png"
        srcset="/images/work/bedrock-5.png 268w, /images/work/bedrock-5@2x.png 536w"
        alt="Mobile Design"
      >
    </image-grid>
    <social-links/>
    <portal to="preview">
      <preview-image
        src="/images/work/bedrock-preview.png"
        src-retina="/images/work/bedrock-preview@2x.png"
        :width="666"
        :width-retina="1332"
        alt="Bedrock Mobile Demo"
        align="center"
        :vertical-offset="10"
      />
    </portal>
  </div>
</template>

<script>
import ImageGrid from '~/components/ImageGrid.vue';
import PreviewImage from '~/components/PreviewImage.vue';
import SocialLinks from '~/components/SocialLinks.vue';

export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'bedrock');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#5833A6');
  },
  head() {
    return {
      title: 'Bedrock Mobile Demo',
      meta: [
        {
          name: 'theme-color',
          content: '#5833A6'
        },
        {
          property: 'og:image',
          content: 'https://www.simonwuyts.com/images/work/bedrock-social.png'
        },
        ,
        {
          property: 'og:url',
          content: 'https://www.simonwuyts.com' + this.$route.fullPath
        }
      ]
    }
  },
  components: {
    ImageGrid,
    PreviewImage,
    SocialLinks
  }
}
</script>
