<template>
  <section class="gh-nutrition-teaser relative flex flex-col justify-center items-center overflow-hidden">
<!--    <h1 class="gh-nutrition-teaser__headline absolute right-0 leading-none font-headline text-custom-cyberGrape uppercase text-right">-->
<!--      {{ $t(teaserData.headline) }}-->
<!--    </h1>-->

    <div class="gh-nutrition-teaser__content absolute inset-0 flex justify-center flex-wrap p-10 md:p-16 lg:p-20 xl:p-40 w-full">
      OLA
    </div>

<!--    <div class="gh-plans-teaser__actions mb-16">-->
<!--      <button-->
<!--        class="gh-button gh-button&#45;&#45;outlined gh-button&#45;&#45;cta gh-button&#45;&#45;lg gh-button&#45;&#45;white"-->
<!--        type="button"-->
<!--      >-->
<!--        {{ $t(teaserData.ctaButton) }}-->
<!--      </button>-->
<!--    </div>-->
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { data } from '~/components/GhPlansTeaser/gh-plans-teaser.data';

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

    &__content {
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
  }
</style>
