<template>
  <section class="gh-team-teaser relative flex flex-col justify-center items-center overflow-hidden">
    <h1 class="gh-team-teaser__headline absolute right-0 left-0 leading-none font-headline text-custom-viridianGreen uppercase text-center opacity-50">
      {{ $t(teaserData.headline) }}
    </h1>

    <div class="gh-team-teaser__cards flex justify-center flex-wrap max-w-screen-xl pt-10 pb-10 md:pt-16 lg:pt-20 xl:pt-40 w-full">
      <GhRoundedCard
        v-for="(card, index) in teaserData.cards"
        :key="index"
        :image-src="$t(card.imageSrc)"
        :headline="$t(card.headline)"
        :sub-headline="$t(card.subHeadline)"
        class="gh-team-teaser__card w-1/6 my-8 mx-12"
      />
    </div>

    <div class="gh-team-teaser__actions mb-16">
      <button
        class="gh-button gh-button--outlined gh-button--cta gh-button--lg gh-button--spaceCadet"
        type="button"
      >
        {{ $t(teaserData.ctaButton) }}
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { data } from './gh-team-teaser.data';

@Component
export default class GhTeamTeaser extends Vue {
  /**
   * Interface
   */
  public teaserData: { [key: string]: any } = data;
}
</script>

<style lang="scss" scoped>
  .gh-team-teaser {
    min-height: 75vh;
    background: url('/patterns/stardust.png') theme('colors.custom.maximumYellow') fixed;

    &__headline {
      top: -10px;
      text-shadow: 0 10px 10px rgba(31, 32, 65, .5);
      @include fluid-type(52px, 300px);

      @screen sm {
        top: -24px;
      }

      @screen md {
        top: -22px;
      }

      @screen lg {
        top: -36px;
      }

      @screen xl {
        top: -48px;
      }

      @screen xxl {
        top: -74px;
      }
    }

    &__card {
      min-width: 300px;
    }
  }
</style>
