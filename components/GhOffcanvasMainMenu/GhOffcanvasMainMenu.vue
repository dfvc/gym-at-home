<template>
  <div class="gh-offcanvas-menu">
    <button
      :title="$t('global.actions.openMenu')"
      type="button"
      class="gh-offcanvas-menu__trigger flex flex-col justify-between items-center py-3 lg:py-4 px-6 h-full"
      @click="openMenu"
    >
      <span class="gh-offcanvas-menu__trigger-bar w-12 bg-white" />
      <span class="gh-offcanvas-menu__trigger-bar w-12 bg-white" />
      <span class="gh-offcanvas-menu__trigger-bar w-12 bg-white" />
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
   * Local State
   */
  public isMenuOpen: boolean = false;

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
    &__trigger-bar {
      height: 2px;
    }
  }
</style>
