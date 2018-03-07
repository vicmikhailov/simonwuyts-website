<template>
  <div class="c-content">
    <the-navigation/>
    <div class="c-content__wrapper">
      <slot/>
    </div>
  </div>
</template>

<script>
import TheNavigation from '~/components/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  }
}
</script>

<style lang="scss">
@import '../css/colors';
.c-content {
  display: flex;
  flex: none;
  flex-direction: column;
  min-width: 56rem;
  overflow: auto;
  padding: 5.6rem 7.2rem;
  width: 50%;
}

.c-content__wrapper {
  flex: none;
  margin-top: auto;
  margin-bottom: auto;
  max-width: 56rem;
}

.c-content__wrapper {
  h1 {
    font: 4rem/5.6rem 'adelle-sans', sans-serif;
    font-weight: 800;
    margin-bottom: 2.4rem;
  }

  .lead {
    color: $gray-500;
    font: 1.8rem/3rem 'adelle-sans', sans-serif;
    margin-bottom: 3.2rem;

    strong {
      color: $gray-900;
      font-weight: 600;
    }
  }

  h2 {
    font: 1.6rem/2.4rem 'adelle-sans', sans-serif;
    font-weight: 700;
    margin: 4rem 0 1.6rem;
    text-transform: uppercase;
  }

  p {
    color: $gray-500;
    margin-bottom: 1.6rem;
  }
  
  a {
    color: $blue-500;
    text-decoration: none;
    
    &:hover {
      border-bottom: 1px solid $blue-500;
    }
  }
}
</style>
