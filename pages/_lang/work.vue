<template>
  <div>
    <h1>{{ $t('work.title') }}</h1>
    <p>{{ $t('work.introduction') }}</p>
  </div>
</template>

<script>
export default {
  head() {
    return { title: this.$t('work.title') }
  }
}
</script>
