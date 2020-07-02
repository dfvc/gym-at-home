<template>
  <section class="gh-intro-teaser flex justify-center items-center bg-main-500">
    <p class="font-headline text-6xl">{{ $t('global.appName') }}</p>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class GhIntroTeaser extends Vue {
  /**
   * Interface
   */
  @Prop({ type: String, default: '' })
  public test: string;
}
</script>

<style lang="scss" scoped>
  .gh-intro-teaser {
    min-height: 100vh;
    margin-top: calc(-1 * theme('spacing.12'));

    @screen lg {
      margin-top: calc(-1 * theme('spacing.16'));
    }
  }
</style>
