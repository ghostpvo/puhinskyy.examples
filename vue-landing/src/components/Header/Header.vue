<template>
  <header class="general-header-wrap">
    <div class="general-header block-wrap">
      <a href="/" class="logo-group">
        <h1 class="logo-title">Cozy House</h1>
        <span class="logo-description">Shelter for pets in Boston</span>
      </a>
      <nav :class="['header-menu', {'header-menu-hidden-mob': mobileMenuState}]">
        <span
          class="menu-item"
          v-for="(link, index) in menuItems"
          :key="`header-menu-item-${index}`"
          :v-scroll-to="'#about-the-shelter'"
          @click="$scrollTo('#' + link.anchorId)"
        >
          {{ link.title }}
        </span>
      </nav>
      <span
        class="mob-menu-toggle"
        @click="mobileMenuState = !mobileMenuState"
      >
        <Icon :icon="'menu-icon'" />
      </span>
    </div>
  </header>
</template>

<script>
import Icon from '../Icon/Icon'
export default {
  name: 'Header',
  components: { Icon },
  data () {
    return {
      menuItems: [
        {
          title: 'About the shelter',
          anchorId: 'about-the-shelter'
        },
        {
          title: 'Our pets',
          anchorId: 'our-friends-block'
        },
        {
          title: 'To help the shelter',
          anchorId: 'help-shelter'
        },
        {
          title: 'Contacts',
          anchorId: 'general-footer'
        }
      ],
      mobileMenuState: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "header";
</style>
