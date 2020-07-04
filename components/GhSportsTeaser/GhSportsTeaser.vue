<template>
  <section class="gh-sports-teaser relative flex justify-center items-center h-screen bg-custom-blueSapphire overflow-hidden">
    <h1 class="gh-sports-teaser__headline absolute top-0 right-0 left-0 uppercase text-6xl font-headline">
      {{ $t('sportsTeaser.heading') }}
    </h1>

  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component
export default class GhSportsTeaser extends Vue {
  /**
   * Interface
   */
}
</script>

<style lang="scss" scoped>
  .gh-sports-teaser {
    &__headline {
    }
  }
</style>
