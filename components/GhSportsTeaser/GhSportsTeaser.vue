<template>
  <section class="gh-sports-teaser relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
    <h1 class="gh-sports-teaser__headline absolute right-0 leading-none font-headline text-custom-viridianGreen uppercase">
      {{ $t(teaserData.headline) }}
    </h1>

    <div class="gh-sports-teaser__cards flex justify-center flex-wrap max-w-screen-xl pt-10 pb-10 md:pt-16 lg:pt-20 xl:pt-40 w-full">
      <GhCard
        v-for="(card, index) in teaserData.cards"
        :key="index"
        :image-src="$t(card.imageSrc)"
        :headline="$t(card.headline)"
        :sub-headline="$t(card.subHeadline)"
        class="gh-sports-teaser__card w-1/6 my-8 mx-12"
      />
    </div>

    <div class="gh-sports-teaser__actions mb-16">
      <button
        class="gh-button gh-button--outlined gh-button--cta gh-button--lg gh-button--white"
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
import { data } from '~/components/GhSportsTeaser/gh-sports-teaser.data';

@Component
export default class GhSportsTeaser extends Vue {
  /**
   * Interface
   */
  public teaserData: { [key: string]: any } = data;
}
</script>

<style lang="scss" scoped>
  .gh-sports-teaser {
    background: url('/patterns/black-felt.png') theme('colors.custom.viridianGreen') fixed;

    &__headline {
      top: -10px;
      left: -5px;
      @include fluid-type(52px, 300px);

      @screen sm {
        top: -24px;
        left: -8px;
      }

      @screen md {
        top: -22px;
        left: -10px;
      }

      @screen lg {
        top: -36px;
        left: -12px;
      }

      @screen xl {
        top: -48px;
        left: -20px;
      }

      @screen xxl {
        top: -74px;
        left: -32px;
      }
    }

    &__card {
      min-width: 300px;
    }

    &__actions {
      /deep/ .gh-button {
        &:hover {
          @apply text-custom-viridianGreen;
        }
      }
    }
  }
</style>
