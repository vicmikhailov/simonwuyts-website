<template>
  <div>
    <h1>Case: GVA Archief</h1>
    <p>Introductie</p>
    <portal to="preview">
      <preview-image
        src="/images/work/gva-preview.png"
        src-retina="/images/work/gva-preview@2x.png"
        :width="666"
        :width-retina="1332"
        alt="Mobile App for GVA"
        align="center"
        :horizontal-offset="10"
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
    return { title: 'Case: GVA Archief' }
  },
  components: {
    PreviewImage
  }
}
</script>
