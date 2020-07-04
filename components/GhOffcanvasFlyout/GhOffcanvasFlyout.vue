<template>
  <transition
    :name="`gh-offcanvas-flyout__transition-${position}`"
    @before-enter="onBeforeEnterTransition"
    @after-enter="onAfterEnterTransition"
    @before-leave="onBeforeLeaveTransition"
    @after-leave="onAfterLeaveTransition"
  >
    <aside
      v-show="isVisible"
      :style="dynamicStyling"
      :class="positioningClassList"
      class="gh-offcanvas-flyout fixed p-8 w-full bg-custom-spaceCadetA7 h-full shadow-2xl overflow-y-auto overflow-x-hidden scrolling-touch"
    >
      <button
        :title="$t('global.actions.close')"
        class="gh-offcanvas-flyout__close-button absolute right-0 z-10 p-0 w-6 h-6"
        @click="onClickCloseButton"
      >
        <GhIcon
          name="cross"
          :title="$t('global.actions.close')"
          class="text-white h-6 w-6"
        />
      </button>
      <slot />
    </aside>
  </transition>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { OffcanvasFlyoutPositioningEnum } from '@/components/GhOffcanvasFlyout/gh-offcanvas-flyout.enum';

@Component
export default class GhOffcanvasFlyout extends Vue {
  /**
   * Interface
   */
  @Prop({ type: Boolean, default: false })
  public isVisible: boolean;

  @Prop({ type: String, default: 'left' })
  public position: string;

  @Prop({ type: Number, default: 375 })
  public maxSize: number;

  public hasSlided: boolean = false;

  /**
   * Local State
   */
  public get positioningClassList(): string {
    switch (this.position) {
      case OffcanvasFlyoutPositioningEnum.LEFT:
      default:
        return 'top-0 bottom-0 left-0';
      case OffcanvasFlyoutPositioningEnum.RIGHT:
        return 'top-0 bottom-0 right-0';
      case OffcanvasFlyoutPositioningEnum.TOP:
        return 'top-0 right-0 left-0';
      case OffcanvasFlyoutPositioningEnum.BOTTOM:
        return 'bottom-0 right-0 left-0';
    }
  }

  public get dynamicStyling(): object {
    let styling = {};

    styling = this.position === OffcanvasFlyoutPositioningEnum.LEFT || this.position === OffcanvasFlyoutPositioningEnum.RIGHT
      ? { maxWidth: `${this.maxSize}px` }
      : { maxHeight: `${this.maxSize}px` };

    styling = {
      ...styling,
      zIndex: this.hasSlided ? 'auto' : -1,
    }

    return styling;
  }

  /**
   * Non-Reactive Properties
   */
  public onClickCloseButton(): void {
    this.$emit('click-offcanvas-flyout-close-button');
  }

  public onBeforeEnterTransition(): void {
    this.$emit('before-show-flyout');
  }

  public onAfterLeaveTransition(): void {
    this.$emit('after-hide-flyout');
  }

  public onAfterEnterTransition(): void {
    this.hasSlided = true;
  }

  public onBeforeLeaveTransition(): void {
    this.hasSlided = false;
  }
}
</script>

<style lang="scss" scoped>
  .gh-offcanvas-flyout {
    z-index: -1;

    &__close-button {
      right: theme('spacing.8');
    }

    &__transition-left-enter-active,
    &__transition-left-leave-active,
    &__transition-right-enter-active,
    &__transition-right-leave-active,
    &__transition-top-enter-active,
    &__transition-top-leave-active,
    &__transition-bottom-enter-active,
    &__transition-bottom-leave-active {
      @apply transition-transform duration-100 ease-in-out;
    }

    &__transition-left-enter,
    &__transition-left-leave-to,
    &__transition-right-enter,
    &__transition-right-leave-to,
    &__transition-top-enter,
    &__transition-top-leave-to,
    &__transition-bottom-enter,
    &__transition-bottom-leave-to {
      @apply transform;
    }

    &__transition-left-enter,
    &__transition-left-leave-to {
      @apply -translate-x-full;
    }

    &__transition-right-enter,
    &__transition-right-leave-to {
      @apply translate-x-full;
    }

    &__transition-top-enter,
    &__transition-top-leave-to {
      @apply -translate-y-full;
    }

    &__transition-bottom-enter,
    &__transition-bottom-leave-to {
      @apply translate-y-full;
    }
  }
</style>
