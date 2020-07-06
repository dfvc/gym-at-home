<template>
  <nuxt-link
    to="/"
    class="gh-card relative inline-block bg-custom-spaceCadet shadow-lg rounded-sm"
  >
    <img
      :src="require(`@/assets/images/${imageSrc}`)"
      :alt="headline"
      class="gh-card__bg-image absolute h-full w-full object-cover rounded-sm transition-all ease duration-100"
    />
    <div class="gh-card__content-outer absolute inset-0 flex items-end p-8 transition-all ease duration-100">
      <div class="gh-card__content-inner leading-none">
        <h1 class="gh-card__content-headline inline-block uppercase font-bold text-2xl tracking-wide">
          <span class="relative z-10">
            {{ headline }}
          </span>
        </h1>
        <p class="gh-card__content-subheadline uppercase text-xs h-0 opacity-0">
          {{ subHeadline }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class GhCard extends Vue {
  /**
   * Interface
   */
  @Prop({ type: String, default: 'placeholder.png' })
  public imageSrc: string;

  @Prop({ type: String, default: '' })
  public headline: string;

  @Prop({ type: String, default: '' })
  public subHeadline: string;
}
</script>

<style lang="scss" scoped>
  .gh-card {
    $root: &;

    &:after {
      @apply block;
      content: '';
      padding-bottom: 100%;
    }

    &__bg-image {
      transform: rotate(2deg);
    }

    &__content-headline {
      @apply relative;
      text-shadow: 0 0 5px rgba(0, 0, 0, .7);

      &:before {
        @apply absolute inset-0 top-auto;
        @apply bg-custom-viridianGreen;
        @apply opacity-0;
        height: 50%;
        content: '';
      }
    }

    &__content-subheadline {
      transition: all .25s ease;
    }

    &:hover {
      #{$root}__bg-image {
        @apply opacity-75;
        transform: rotate(0);
      }

      #{$root}__content-outer {
        @apply opacity-100;
      }
      #{$root}__content-headline {
        @apply text-custom-maximumYellow;

        &:before {
          @apply opacity-100;
        }
      }

      #{$root}__content-subheadline {
        @apply opacity-100;
        padding-top: 5px;
        padding-bottom: 10px;
      }
    }
  }
</style>
