<template>
  <div>
    <h1>{{ $t('contact.title') }}</h1>
    <p class="lead">{{ $t('contact.introduction') }}</p>
    <p>
      Simon Wuyts<br>
      hi@simonwuyts.com<br>
      0032 485 07 16 17
    </p>

    <p>
      <a
        href="https://www.twitter.com/simonwuyts"
        target="_blank"
      >
        @simonwuyts
      </a>
      <br>
      <a
        href="https://www.linkedin.com/in/simonwuyts/"
        target="_blank"
      >
        LinkedIn
      </a>
    </p>

    <p>BE0557975573</p>
  </div>
</template>

<script>
export default {
  fetch({ store }) {
    store.commit('SET_PAGE', 'contact');
  },
  head() {
    return { title: this.$t('contact.title') }
  }
}
</script>
