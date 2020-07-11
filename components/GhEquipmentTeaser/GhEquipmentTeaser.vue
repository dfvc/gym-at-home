<template>
  <section class="gh-equipment-teaser relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
    <h1 class="gh-equipment-teaser__headline absolute right-0 leading-none font-headline text-gray-800 uppercase">
      {{ $t(teaserData.headline) }}
    </h1>

    <div class="gh-equipment-teaser__cards flex justify-center flex-wrap max-w-screen-xl pt-10 pb-10 md:pt-16 lg:pt-20 xl:pt-40 w-full">
      <div class="container px-5 pt-12 pb-24 mx-auto">
        <GhEquipmentItem
          v-for="(item, index) in teaserData.items"
          :key="index"
          :image-src="$t(item.imageSrc)"
          :name="$t(item.name)"
          :description="$t(item.description)"
          :left-align="getAlignmentForItem(index)"
        />
      </div>
    </div>

    <div class="gh-equipment-teaser__actions flex justify-end mb-16 max-w-screen-xl pr-10 md:pr-16 lg:pr-20 xl:pr-40 w-full">
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
import { data } from '~/components/GhEquipmentTeaser/gh-equipment-teaser.data';

@Component
export default class GhEquipmentTeaser extends Vue {
  /**
   * Interface
   */
  public teaserData: { [key: string]: any } = data;

  /**
   * Non Reactive Properties
   */
  public getAlignmentForItem(index: number): boolean {
    return index % 2 === 0;
  }
}
</script>

<style lang="scss" scoped>
  .gh-equipment-teaser {
    background:
      url('/olympic-plates.jpg') bottom left no-repeat, linear-gradient(transparent 0%, transparent 20%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 1) 100%)
      theme('colors.gray.900');
    background-size: 75%;

    &__headline {
      top: -10px;
      left: -5px;
      @include fluid-type(52px, 100px);

      @screen sm {
        top: -14px;
        left: -6px;
      }

      @screen md {
        top: -10px;
        left: -8px;
      }

      @screen lg {
        top: -16px;
        left: -10px;
      }

      @screen xl {
        top: -18px;
        left: -10px;
      }

      @screen xxl {
        top: -20px;
        left: -12px;
      }
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
