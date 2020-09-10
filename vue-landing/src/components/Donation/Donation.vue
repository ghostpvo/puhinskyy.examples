<template>
  <div class="donation-wrap">
    <div class="donation block-wrap">
      <img class="donation-picture" src="../../assets/img/donation.jpg" alt="">
      <div class="donation-content">
        <h3 class="block-title">
          In addition, you <br>
          can make a donation
        </h3>
        <strong class="bank-info">Name of the bank / Type of bank account</strong>
        <div
          class="bank-card"
        >
          <Icon
            :icon="'credit-card'"
          />
          <span class="credit-card-number">
            {{ creditCardNumber }}
          </span>
        </div>
        <p class="legal-information">Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../Icon/Icon'
export default {
  name: 'Donation',
  components: { Icon },
  data () {
    return {
      creditCardNumber: '8380 2880 8028 8791 7435'
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'donation';
</style>
