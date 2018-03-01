export const state = () => ({
  currentPage: 'home',
  loading: false,
  locales: ['en', 'nl'],
  locale: 'en',
  logoColor: 'blue'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
  SET_LOGO_COLOR(state, color) {
    state.logoColor = color;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_PAGE(state, currentPage) {
    state.currentPage = currentPage;
  }
}
