<template>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true;
      this.$store.commit('SET_LOADING', true);
      return this;
    },
    finish() {
      this.loading = false;
      this.$store.commit('SET_LOADING', false);
      return this;
    }
  }
}
</script>
