<template>
  <section class="gh-plans-teaser relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
    <h1 class="gh-plans-teaser__headline absolute right-0 leading-none font-headline text-custom-cyberGrape uppercase text-right">
      {{ $t(teaserData.headline) }}
    </h1>

    <div class="gh-plans-teaser__plans flex justify-center flex-wrap max-w-screen-xl pt-10 pb-10 md:pt-16 lg:pt-20 xl:pt-40 w-full">
      <GhPlan
        v-for="(plan, index) in teaserData.plans"
        :key="index"
        :name="plan.name"
        :price="plan.price"
        :items="plan.items"
        :subscribe-label="plan.subscribeLabel"
        :subscribe-url="plan.subscribeUrl"
        :remarks="plan.remarks"
        :featured="plan.featured"
      />
    </div>

    <div class="gh-plans-teaser__actions mb-16">
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
import { data } from '~/components/GhPlansTeaser/gh-plans-teaser.data';

@Component
export default class GhPlansTeaser extends Vue {
  /**
   * Interface
   */
  public teaserData: { [key: string]: any } = data;
}
</script>

<style lang="scss" scoped>
  .gh-plans-teaser {
    background: url('/patterns/diagmonds.png') theme('colors.custom.cyberGrape') fixed;

    &__headline {
      top: -10px;
      right: -5px;
      @include fluid-type(52px, 300px);

      @screen sm {
        top: -24px;
        right: -8px;
      }

      @screen md {
        top: -22px;
        right: -10px;
      }

      @screen lg {
        top: -36px;
        right: -12px;
      }

      @screen xl {
        top: -48px;
        right: -18px;
      }

      @screen xxl {
        top: -74px;
        right: -26px;
      }
    }

    &__actions {
      /deep/ .gh-button {
        &:hover {
          @apply text-custom-cyberGrape;
        }
      }
    }
  }
</style>
