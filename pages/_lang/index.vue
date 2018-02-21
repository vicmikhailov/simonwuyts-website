<template>
  <div>
    <h1>Simon Wuyts</h1>
    <p>{{ $t('home.introduction') }}</p>
  </div>
</template>

<script>
export default {
  head() {
    return { title: this.$t('home.title') }
  }
}
</script>
