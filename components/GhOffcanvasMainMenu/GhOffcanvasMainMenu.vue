<template>
  <div
    :class="menuDynamicClassList"
    class="gh-offcanvas-menu"
  >
    <button
      :title="$t('global.actions.openMenu')"
      type="button"
      class="gh-offcanvas-menu__trigger flex flex-col justify-center items-center px-6 h-full"
      @click="openMenu"
    >
      <span class="gh-offcanvas-menu__trigger-bar my-px w-12 bg-white transition-all duration-100" />
      <span class="gh-offcanvas-menu__trigger-bar my-px w-12 bg-white transition-all duration-100" />
      <span class="gh-offcanvas-menu__trigger-bar my-px w-12 bg-white transition-all duration-100" />
    </button>

    <GhBackgroundOverlay
      :is-visible="isMenuOpen"
      transparent
      @click-background-overlay="closeMenu"
    />

    <GhOffcanvasFlyout
      :is-visible="isMenuOpen"
      position="top"
      class="mt-12 lg:mt-16"
      @click-offcanvas-flyout-close-button="closeMenu"
      @before-show-flyout="onBeforeShowFlyout"
      @after-hide-flyout="onAfterHideFlyout"
    >
      TEST
    </GhOffcanvasFlyout>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component
export default class GhOffcanvasMainMenu extends Vue {
  /**
   * Interface
   */
  public isMenuOpen: boolean = false;

  /**
   * Local State
   */
  public get menuDynamicClassList(): string {
    return this.isMenuOpen ? 'gh-offcanvas-menu--opened' : '';
  }

  /**
   * Non-Reactive Properties
   */
  public openMenu(): void {
    this.isMenuOpen = true;
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
  }

  public onBeforeShowFlyout(): void {
    this.$emit('before-open-menu');
  }

  public onAfterHideFlyout(): void {
    this.$emit('after-close-menu');
  }
}
</script>

<style lang="scss" scoped>
  .gh-offcanvas-menu {
    $root: &;

    &--opened {
      #{$root}__trigger-bar {
        margin: 5px 0;
      }
    }

    &__trigger {
      &:hover {
        #{$root}__trigger-bar {
          margin: 5px 0;
        }
      }
    }

    &__trigger-bar {
      margin: 3px 0;
      height: 2px;
    }
  }
</style>
