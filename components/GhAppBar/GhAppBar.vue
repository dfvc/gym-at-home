<template>
  <header
    :class="classList"
    class="gh-app-bar sticky top-0 z-50 flex justify-between"
  >
    <GhOffcanvasMainMenu
      @before-open-menu="setMenuAsOpen"
      @after-close-menu="setMenuAsClosed"
    />

    <nuxt-link
      to="/"
      class="inline-flex items-center mx-6 font-headline text-3xl"
    >
      {{ $t('global.appName') }}
    </nuxt-link>

    <button
      type="button"
      class="gh-button hidden sm:block"
    >
      {{ $t('appBar.engageButtonLabel') }}
    </button>
  </header>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { APPBAR_BLUR_THRESHOLD } from '@/components/GhAppBar/gh-app-bar.constant';

@Component
export default class GhAppBar extends Vue {
  /**
   * Interface
   */
  public scrollTopPosition: number = 0;

  public isMenuOpen: boolean = false;

  /**
   * Local State
   */
  public get classList(): string {
    if (this.isMenuOpen) return 'gh-app-bar--darkest';

    return this.scrollTopPosition > APPBAR_BLUR_THRESHOLD ? 'gh-app-bar--dark' : '';
  }

  /**
   * Events
   */
  public mounted(): void {
    window.addEventListener('scroll', this.updateScrollTopPosition);
  }

  public beforeDestroy(): void {
    window.removeEventListener('scroll', this.updateScrollTopPosition);
  }

  /**
   * Non-Reactive Properties
   */
  public updateScrollTopPosition(): void {
    this.scrollTopPosition = document.documentElement.scrollTop;
  }

  public setMenuAsOpen(): void {
    this.isMenuOpen = true;
  }

  public setMenuAsClosed(): void {
    this.isMenuOpen = false;
  }
}
</script>

<style lang="scss" scoped>
  .gh-app-bar {
    height: theme('spacing.12');

    &:after {
      @apply absolute inset-0;
      @apply transition-colors duration-200;
      z-index: -1;
      content: '';
    }

    &--dark {
      &:after {
        @apply bg-custom-spaceCadetA7;
      }
    }

    &--darkest {
      &:after {
        @apply bg-custom-spaceCadet;
      }
    }

    @screen lg {
      height: theme('spacing.16');
    }
  }
</style>
