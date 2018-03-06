<template>
  <div class="c-content">
    <slot/>
  </div>
</template>

<style lang="scss">
.c-content {
  flex: 1;
  overflow: auto;
  min-width: 40rem;
  padding: 5.6rem 7.2rem;
  width: 50%;
}

.c-content {
  h1 {
    font: 4rem/5.6rem 'adelle-sans', sans-serif;
    font-weight: 800;
    margin: 3.8rem 0 2.4rem;
  }

  .lead {
    color: #677175;
    font: 2rem/3rem 'adelle-sans', sans-serif;
    margin-bottom: 4rem;
  }

  h2 {
    font: 1.6rem/2.4rem 'adelle-sans', sans-serif;
    font-weight: 700;
    margin: 3.2rem 0 0.8rem;
    text-transform: uppercase;
  }

  p {
    color: #677175;
  }
}
</style>
