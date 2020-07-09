<template>
  <section class="gh-pt-near-by-teaser relative flex flex-col justify-center items-center bg-custom-viridianGreen">
    <div
      :class="mapDynamicClassList"
      class="gh-pt-near-by-teaser__map absolute inset-0"
      @mouseover="isMapOver = true"
      @mouseleave="isMapOver = false"
    >
      <iframe
        class="h-full w-full"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295269.69991278846!2d-8.298474601647364!3d37.40333585396564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd101a7cfe904d63%3A0x279f9f37de7ad193!2sVila%20Nova%20de%20Cacela!5e0!3m2!1spt-PT!2spt!4v1594330432951!5m2!1spt-PT!2spt"
      />
    </div>

    <h1
      :class="headingDynamicClassList"
      class="gh-pt-near-by-teaser__headline absolute right-0 left-0 leading-none font-headline text-custom-maximumYellow uppercase text-center transition-opacity duration-200 pointer-events-none"
    >
      {{ $t(teaserData.headline) }}
    </h1>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { data } from '~/components/GhPtNearByTeaser/gh-pt-near-by-teaser.data';

@Component
export default class GhPtNearByTeaser extends Vue {
  /**
   * Interface
   */
  public teaserData: { [key: string]: any } = data;

  public isMapOver: boolean = false;

  public get headingDynamicClassList(): string {
    return this.isMapOver ? 'opacity-0' : 'opacity-100';
  }

  public get mapDynamicClassList(): string {
    return this.isMapOver ? 'gh-pt-near-by-teaser__map--over' : '';
  }
}
</script>

<style lang="scss" scoped>
  .gh-pt-near-by-teaser {
    height: 50vh;
    min-height: 300px;

    &__headline {
      top: -10px;
      text-shadow: 0 7px 10px rgba(31, 32, 65, .25);
      @include fluid-type(52px, 200px);

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

    &__map {
      @apply transition-all duration-200;
      opacity: .65;
      filter: grayscale(1) contrast(1.2);

      &--over {
        @apply opacity-100;
        filter: none;
      }
    }
  }
</style>
