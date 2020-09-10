<template>
  <div class="our-friends">
    <div class="block-wrap">
      <h3 class="block-title">Our friends who <br/> are looking for a house</h3>
      <div class="friends-list-wrap">
        <agile
          class="friends-list"
          ref="petsCarousel"
          :options="agileOptions"
        >
          <div
            class="friend-item-wrap"
            v-for="(pet, index) in pets"
            :key="`pet-number-${index}`"
          >
            <div class="friend-item">
              <img
              class="friend-picture"
              :src="require(`../../assets/img/${pet.pic}`)"
              :alt="pet.name"
            >
              <h4 class="friend-name">
                {{ pet.name }}
              </h4>
              <button class="main-btn main-btn-alt">
                Learn More
              </button>
            </div>
          </div>
        </agile>
        <div class="pets-navigation">
          <button
            @click="$refs.petsCarousel.goToNext()"
            class="nav-arrow nav-arrow-right"
          >
            <Icon
              :icon="'long-right-arrow'"
            />
          </button>
          <button
            @click="$refs.petsCarousel.goToPrev()"
            class="nav-arrow nav-arrow-left"
          >
            <Icon
              :icon="'long-left-arrow'"
            />
          </button>
        </div>
      </div>
      <div class="get-the-rest">
        <button class="main-btn">
          Get to know the rest
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../Icon/Icon'
export default {
  name: 'OurFriends',
  components: { Icon },
  data () {
    return {
      pets: [
        {
          name: 'Katrine',
          pic: 'friend-1.jpg'
        },
        {
          name: 'Jennifer',
          pic: 'friend-2.jpg'
        },
        {
          name: 'Woody',
          pic: 'friend-3.jpg'
        },
        {
          name: 'Katrine',
          pic: 'friend-1.jpg'
        },
        {
          name: 'Jennifer',
          pic: 'friend-2.jpg'
        },
        {
          name: 'Woody',
          pic: 'friend-3.jpg'
        }
      ],
      agileOptions: {
        dots: false,
        navButtons: false,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 1003,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'our-friends';
</style>

<style lang="scss">
  .our-friends {
    .agile__list {
      padding: 65px 0;
    }
  }
</style>
