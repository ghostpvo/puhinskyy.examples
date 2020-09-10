<template>
  <div id="app">
    <FirstScreen />
    <AboutUs id="about-the-shelter" />
    <OurFriends id="our-friends-block" />
    <YouCanHelp id="help-shelter" />
    <Donation />
    <Footer id="general-footer"/>
  </div>
</template>

<script>

import FirstScreen from './components/FirstScreen/FirstScreen'
import AboutUs from './components/AboutUs/AboutUs'
import OurFriends from './components/OurFriends/OurFriends'
import YouCanHelp from './components/YouCanHelp/YouCanHelp'
import Donation from './components/Donation/Donation'
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: { Footer, Donation, YouCanHelp, OurFriends, AboutUs, FirstScreen }
}
</script>

<style lang="scss">
  @import 'assets/scss/main.scss';
</style>
