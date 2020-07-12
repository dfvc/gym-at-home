<template>
  <section class="gh-social-teaser relative flex flex-col justify-center items-center overflow-hidden">
    <div class="gh-social-teaser__items flex justify-between flex-wrap max-w-screen-xl p-10 w-full">
      <GhSocialItem
        v-for="(item, index) in teaserData.items"
        :key="index"
        :name="$t(item.name)"
        :url="$t(item.url)"
        class="gh-social-teaser__item w-1/6 m-4"
      />
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { data } from '~/components/GhSocialTeaser/gh-social-teaser.data';

@Component
export default class GhTeamTeaser extends Vue {
  /**
   * Interface
   */
  public teaserData: { [key: string]: any } = data;
}
</script>

<style lang="scss" scoped>
  .gh-social-teaser {
    min-height: 25vh;
    background: url('/patterns/low-contrast-linen.png') theme('colors.white') fixed;
  }
</style>
