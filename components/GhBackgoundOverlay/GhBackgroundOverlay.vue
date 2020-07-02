<template>
  <transition
    v-if="isVisible"
    name="gh-background-overlay__transition"
  >
    <div
      :class="classList"
      class="gh-background-overlay fixed inset-0 bg-gray-600"
      @click.stop="onClickBackgroundOverlay()"
    />
  </transition>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class GhBackgroundOverlay extends Vue {
  /**
   * Interface
   */
  @Prop({ type: Boolean, default: false })
  public isVisible: boolean;

  @Prop({ type: Boolean, default: false })
  public transparent: boolean;

  /**
   * Local State
   */
  public get classList(): string {
    return this.transparent ? 'opacity-0' : 'opacity-50';
  }

  /**
   * Non-Reactive Properties
   */
  public onClickBackgroundOverlay(): void {
    this.$emit('click-background-overlay');
  }
}
</script>

<style lang="scss" scoped>
  .gh-background-overlay {

    &__transition-enter-active,
    &__transition-leave-active {
      @apply transition transition-opacity duration-100 ease-in-out;
    }

    &__transition-enter,
    &__transition-leave-to {
      @apply opacity-0;
    }
  }
</style>
