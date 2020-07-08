<template>
  <section class="gh-nutrition-teaser relative flex flex-col justify-center items-center overflow-hidden">
    <div class="gh-nutrition-teaser__background absolute inset-0" />

    <h1 class="gh-nutrition-teaser__headline absolute right-0 leading-none font-headline text-gray-300 uppercase text-right">
      {{ $t(teaserData.headline) }}
    </h1>

    <div class="gh-nutrition-teaser__content relative ml-auto text-custom-blueSapphire p-10 md:p-16 lg:p-20">
      <ul class="mt-4">
        <li
          v-for="(nutritionItem, index) in teaserData.items"
          :key="index"
          class="flex flex-col items-start"
        >
          <div class="flex items-center items-start my-1 py-2 px-4 text-xl md:text-2xl bg-red-200 rounded bg-custom-blueSapphireA5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-custom-maximumYellow w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span>{{ $t(nutritionItem) }}</span>
          </div>
          <p class="mb-4 text-sm">
            {{ $t(teaserData.descriptions[index]) }}
          </p>
        </li>
      </ul>
    </div>

    <div class="gh-nutrition-teaser__actions relative mb-20">
      <button
        class="gh-button gh-button--cta gh-button--lg gh-button--blueSapphire"
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
import { data } from '~/components/GhNutritionTeaser/gh-nutrition-teaser.data';

@Component
export default class GhNutritionTeaser extends Vue {
  /**
   * Interface
   */
  public teaserData: { [key: string]: any } = data;
}
</script>

<style lang="scss" scoped>
  .gh-nutrition-teaser {
    min-height: 50vh;
    background:
      url('/nutrition-health.jpg')
      #fff
      bottom left / auto 100%
      no-repeat;

    &__background {
      background:
        linear-gradient(90deg, transparent 0%, transparent 25%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 1) 100%)
        left / auto 100%
        no-repeat;

      @screen md {
        background:
          linear-gradient(90deg, transparent 0%, transparent 35%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 1) 100%)
          left / auto 100%
          no-repeat;
      }

      @screen lg {
        background:
          linear-gradient(90deg, transparent 0%, transparent 25%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 1) 100%)
          left / auto 100%
          no-repeat;
      }
    }

    &__headline {
      bottom: -5px;
      right: -5px;
      @include fluid-type(52px, 200px);

      @screen sm {
        bottom: -8px;
        right: -8px;
      }

      @screen md {
        bottom: -10px;
        right: -10px;
      }

      @screen lg {
        bottom: -14px;
        right: -12px;
      }

      @screen xl {
        bottom: -18px;
        right: -18px;
      }

      @screen xxl {
        bottom: -26px;
        right: -22px;
      }
    }

    &__content {
      @screen lg {
        width: 65%;
      }
    }
  }
</style>
