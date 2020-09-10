<template>
  <footer class="general-footer-wrap">
    <div class="general-footer block-wrap">
      <section class="footer-group">
        <h3 class="block-title">
          For questions <br/>
          and suggestions
        </h3>
        <address class="footer-info-item">
          <Icon :icon="'envelope'"/>
          <a href="mailto:email@shelter.com" class="footer-address-data">email@shelter.com</a>
        </address>
        <address class="footer-info-item">
          <Icon :icon="'telephone'" />
          <a href="tel:+136745677554" class="footer-address-data">+13 674 567 75 54</a>
        </address>
      </section>
      <section class="footer-group">
        <h3 class="block-title">
          We are waiting <br/>
          for your visit
        </h3>
        <address class="footer-info-item">
          <Icon :icon="'pin'" />
          <span class="footer-address-data">
            Boston, Central Street, 1st
            (Entrance from the store)
          </span>
        </address>
        <address class="footer-info-item">
          <Icon :icon="'pin'" />
          <span class="footer-address-data">
            London, South Park, 18st
          </span>
        </address>
      </section>
    </div>
  </footer>
</template>

<script>
import Icon from '../Icon/Icon'
export default {
  name: 'Footer',
  components: { Icon }
}
</script>

<style scoped lang="scss">
  @import 'footer';
</style>
