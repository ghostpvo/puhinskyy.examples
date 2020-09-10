<template>
  <div class="you-can-help block-wrap">
    <h3 class="block-title">
      Than you can help<br>
      our shelter
    </h3>
    <ul class="help-items">
      <li
        class="help-item"
        v-for="(item, index) in helpItems"
        :key="`help-item-${index}`"
      >
        <Icon
          :icon="item.icon"
        />
        <span class="item-text">
          {{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '../Icon/Icon'
export default {
  name: 'YouCanHelp',
  components: { Icon },
  data () {
    return {
      helpItems: [
        {
          icon: 'cat-food',
          text: 'Pet food'
        },
        {
          icon: 'ambulance',
          text: 'Transportation'
        },
        {
          icon: 'ball',
          text: 'Toys'
        },
        {
          icon: 'bowl',
          text: 'Bowls and cups'
        },
        {
          icon: 'shampoo',
          text: 'Shampoos'
        },
        {
          icon: 'pills',
          text: 'Vitamins'
        },
        {
          icon: 'syringe',
          text: 'Medicines'
        },
        {
          icon: 'leash',
          text: 'Collars / leashes'
        },
        {
          icon: 'cat',
          text: 'Sleeping area'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'you-can-help';
</style>
