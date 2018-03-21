export const state = () => ({
  currentPage: 'home',
  loading: false,
  locales: ['en', 'nl'],
  locale: 'en',
  logoColor: '#0076FF',
  previewColor: '#EFF2F3',
  previewImage: {
    src: '/images/simon-home.jpg',
    srcRetina: '/images/simon-home@2x.jpg',
    width: 666,
    widthRetina: 1332,
    alt: 'Simon Wuyts, Interaction Designer',
    align: 'full',
    verticalOffset: 0
  }
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
  SET_LOGO_COLOR(state, color) {
    state.logoColor = color;
  },
  SET_PREVIEW_COLOR(state, color) {
    state.previewColor = color;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_PAGE(state, currentPage) {
    state.currentPage = currentPage;
  },
  SET_PREVIEW(state, previewImage) {
    state.previewImage = previewImage;
  }
};
