<template>
  <section class="gh-partners-teaser relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
    <h1 class="gh-partners-teaser__headline absolute right-0 leading-none font-headline uppercase">
      {{ $t(teaserData.headline) }}
    </h1>

    <div class="gh-partners-teaser__cards flex justify-center flex-wrap max-w-screen-xl pt-10 pb-10 md:pt-16 lg:pt-20 xl:pt-40 w-full">
      <div class="container px-5 pt-12 pb-24 mx-auto">
        <GhPartnerItem
          v-for="(item, index) in teaserData.items"
          :key="index"
          :image-src="$t(item.imageSrc)"
          :name="$t(item.name)"
          :description="$t(item.description)"
          :left-align="getAlignmentForItem(index)"
        />
      </div>
    </div>

    <div class="gh-partners-teaser__actions flex mb-16 max-w-screen-xl pl-10 md:pl-16 lg:pl-20 xl:pl-40 w-full">
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
import { data } from '~/components/GhPartnersTeaser/gh-partners-teaser.data';

@Component
export default class GhPartnersTeaser extends Vue {
  /**
   * Interface
   */
  public teaserData: { [key: string]: any } = data;

  /**
   * Non Reactive Properties
   */
  public getAlignmentForItem(index: number): boolean {
    return index % 2 !== 0;
  }
}
</script>

<style lang="scss" scoped>
  .gh-partners-teaser {
    background:
      linear-gradient(transparent 0%, rgba(255, 0, 0, .75) 100%), url('/patterns/dark-mosaic.png')
      theme('colors.red.800')
      fixed;

    &__headline {
      bottom: -16px;
      right: -5px;
      color: rgba(0, 0, 0, .25);
      @include fluid-type(52px, 100px);

      @screen sm {
        bottom: -18px;
        right: -6px;
      }

      @screen md {
        bottom: -18px;
        right: -8px;
      }

      @screen lg {
        bottom: -20px;
        right: -10px;
      }

      @screen xl {
        bottom: -22px;
        right: -10px;
      }

      @screen xxl {
        bottom: -28px;
        right: -12px;
      }
    }

    &__actions {
      /deep/ .gh-button {
        &:hover {
          @apply text-red-800;
        }
      }
    }
  }
</style>
