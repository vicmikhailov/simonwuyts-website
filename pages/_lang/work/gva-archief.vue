<template>
  <div>
    <h1>{{ $t('cases.archive.title') }}</h1>
    <p
      class="lead"
      v-html="$t('cases.archive.introduction')"
    />
    <img
      src="/images/work/gva-archive-1.png"
      srcset="/images/work/gva-archive-1.png 560w, /images/work/gva-archive-1@2x.png 1300w"
      alt="Homepage"
    >
    <image-grid>
      <img
        src="/images/work/gva-archive-2.png"
        srcset="/images/work/gva-archive-2.png 268w, /images/work/gva-archive-2@2x.png 536w"
        alt="PDF Detail"
      >
      <img
        src="/images/work/gva-archive-3.png"
        srcset="/images/work/gva-archive-3.png 268w, /images/work/gva-archive-3@2x.png 536w"
        alt="Preview Image"
      >
      <img
        src="/images/work/gva-archive-4.png"
        srcset="/images/work/gva-archive-4.png 268w, /images/work/gva-archive-4@2x.png 536w"
        alt="Design Spec"
      >
      <img
        src="/images/work/gva-archive-5.png"
        srcset="/images/work/gva-archive-5.png 268w, /images/work/gva-archive-5@2x.png 536w"
        alt="Search Results"
      >
    </image-grid>
    <p class="note">{{ $t('cases.archive.copyright') }}</p>
    <social-links/>
    <portal to="preview">
      <preview-image
        src="/images/work/gva-archive-preview.png"
        src-retina="/images/work/gva-archive-preview@2x.png"
        :width="666"
        :width-retina="1332"
        alt="Mobile App for GVA"
        align="right"
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
    store.commit('SET_PAGE', 'gva-archive');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#DA291C');
  },
  head() {
    return {
      title: 'GVA Archief',
      meta: [
        {
          name: 'theme-color',
          content: '#DA291C'
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
