<template>
  <svg
    :class="iconId"
    class="icon"
    viewBox="0 0 100 100"
  >
    <use :xlink:href="getSprite(iconId)">
      {{ icon }}
    </use>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconId () {
      if (this.isActive) {
        return this.icon + '-active'
      } else {
        return this.icon
      }
    }
  },
  methods: {
    getSprite (type) {
      return require('../../assets/sprite/sprite.svg') + '#' + type
    }
  }
}
</script>
