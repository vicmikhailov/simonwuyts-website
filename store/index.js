export const state = () => ({
  homepage: false,
  locales: ['en', 'nl'],
  locale: 'en',
  logoColor: 'red'
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
  SET_HOMEPAGE(state, homepage) {
    state.homepage = homepage;
  }
}
