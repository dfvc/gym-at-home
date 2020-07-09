<template>
  <nuxt-link
    to="/"
    class="gh-rounded-card relative inline-block hover:bg-custom-spaceCadet rounded-full border-4 border-transparent hover:border-custom-cyberGrape transition-all ease duration-100"
  >
    <img
      :src="require(`@/assets/images/${imageSrc}`)"
      :alt="headline"
      class="gh-rounded-card__bg-image absolute h-full w-full object-cover rounded-full transition-all ease duration-300"
    />
    <div class="gh-rounded-card__content-outer absolute inset-0 flex justify-center items-end p-8 transition-all ease duration-300">
      <div class="gh-rounded-card__content-inner leading-none text-center pb-5">
        <h1 class="gh-rounded-card__content-headline inline-block uppercase font-bold text-2xl tracking-wide">
          <span class="relative z-10">
            {{ headline }}
          </span>
        </h1>
        <p class="gh-rounded-card__content-subheadline uppercase text-xs h-0 opacity-0 font-bold">
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
export default class GhRoundedCard extends Vue {
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
  .gh-rounded-card {
    $root: &;

    &:after {
      @apply block;
      content: '';
      padding-bottom: 100%;
    }

    &__content-headline {
      @apply relative;
      text-shadow: 0 0 5px rgba(0, 0, 0, .7);

      &:before {
        @apply absolute inset-0 top-auto;
        @apply bg-white;
        @apply opacity-0;
        height: 25%;
        content: '';
      }
    }

    &__content-subheadline {
      transition: all .25s ease;
    }

    &:hover {
      #{$root}__bg-image {
        @apply opacity-75;
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
