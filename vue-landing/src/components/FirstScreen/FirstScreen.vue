<template>
  <div class="first-screen">
    <Header />
    <MainOffer />
  </div>
</template>

<script>
import Header from '../Header/Header'
import MainOffer from '../MainOffer/MainOffer'
export default {
  name: 'FirstScreen',
  components: { MainOffer, Header }
}
</script>

<style scoped lang="scss">
  @import "first-screen.scss";
</style>
