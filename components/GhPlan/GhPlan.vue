<template>
  <article class="gh-plan__outer p-6 xl:w-1/4 md:w-1/2 w-full">
    <div
      :class="dynamicClassList"
      class="gh-plan__inner h-full p-6 border-2 flex flex-col relative overflow-hidden hover:bg-custom-spaceCadetA7 hover:-mt-4 hover:mb-4 transition-all duration-100 rounded-sm"
    >
      <span
        v-if="featured"
        class="bg-custom-maximumYellow text-custom-cyberGrape px-3 py-1 tracking-widest text-xs uppercase absolute right-0 top-0"
      >
        {{ $t('plansTeaser.featuredLabel') }}
      </span>

      <h2 class="gh-plan__name uppercase text-sm tracking-widest font-bold text-custom-maximumYellow">
        {{ $t(name) }}
      </h2>
      <h1 class="gh-plan__price text-5xl text-white pb-3 mb-4 border-b border-white leading-none">
        {{ $t(price) }}
      </h1>

      <ul class="gh-plan__items mb-2">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="gh-plan__item flex items-center text-white mb-2"
        >
          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-custom-viridianGreen text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {{ $t(item) }}
        </li>
      </ul>

      <button class="gh-plan__subscribe flex items-center mt-auto text-white bg-custom-viridianGreen border-0 py-2 pl-4 pr-3 w-full focus:outline-none hover:bg-transparent hover:pr-0 transition-all duration-100">
        {{ $t(subscribeLabel) }}
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>

      <p class="gh-plan__remarks text-xs text-gray-500 mt-3">
        {{ $t(remarks) }}
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class GhPlan extends Vue {
  /**
   * Interface
   */
  @Prop({ type: String, required: true })
  public name: string;

  @Prop({ type: String, required: true })
  public price: string;

  @Prop({ type: Array, default: '' })
  public items: string[];

  @Prop({ type: String, required: true })
  public subscribeLabel: string;

  @Prop({ type: String, required: true })
  public subscribeUrl: string;

  @Prop({ type: String, default: '' })
  public remarks: string;

  @Prop({ type: Boolean, default: false })
  public featured: boolean;

  /**
   * Local State
   */
  public get dynamicClassList(): string {
    return this.featured ? 'border-custom-maximumYellow' : 'border-white';
  }
}
</script>

<style lang="scss" scoped>
  .gh-plan {
    &__outer {
      max-width: 320px;
    }

    &__inner {
      &:hover {
        box-shadow: 0 10px 50px -12px rgba(255, 255, 255, .5);
      }
    }
  }
</style>
