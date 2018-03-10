<template>
  <div>
    <h1>{{ $t('cases.archive.title') }}</h1>
    <p class="lead" v-html="$t('cases.archive.introduction')"></p>
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
import PreviewImage from '~/components/PreviewImage.vue';

export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'gva-archive');
    store.commit('SET_LOGO_COLOR', '#FFF');
    store.commit('SET_PREVIEW_COLOR', '#DA291C');
  },
  head() {
    return { title: 'GVA Archief' }
  },
  components: {
    PreviewImage
  }
}
</script>
