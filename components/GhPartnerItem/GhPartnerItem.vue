<template>
  <div class="gh-equipment-item flex items-center lg:w-3/5 mx-auto pb-10 mb-10 sm:flex-row flex-col">
    <div
      :class="imageWrapperDynamicClassList"
      class="sm:w-32 sm:h-32 h-20 w-20 p-3 rounded-md bg-gray-900 flex-shrink-0 overflow-hidden"
    >
      <img
        :src="require(`@/assets/images/${imageSrc}`)"
        :alt="name"
        class="gh-equipment-item__image h-full w-full object-contain"
      />
    </div>

    <div
      :class="contentWrapperDynamicClassList"
      class="flex-grow sm:text-left text-center mt-6 sm:mt-0"
    >
      <h2 class="gh-equipment-item__headline text-white text-xl font-bold mb-2 tracking-wide">
        {{ name }}
      </h2>
      <p
        v-if="hasDescription"
        class="gh-equipment-item__description leading-normal text-white"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class GhEquipmentItem extends Vue {
  /**
   * Interface
   */
  @Prop({ type: String, required: true })
  public imageSrc: string;

  @Prop({ type: String, required: true })
  public name: string;

  @Prop({ type: String, default: '' })
  public description: string;

  @Prop({ type: Boolean, default: true })
  public leftAlign: boolean;

  /**
   * Local State
   */
  public get hasDescription(): boolean {
    return this.description.trim().length > 0
  }

  public get imageWrapperDynamicClassList(): string {
    return this.leftAlign ? 'sm:order-1 sm:mr-10' : 'sm:order-2 sm:ml-10';
  }

  public get contentWrapperDynamicClassList(): string {
    return this.leftAlign ? 'sm:order-2' : 'sm:order-1';
  }
}
</script>

<style lang="scss" scoped>
  .gh-equipment-item {
    &__headline {
      text-shadow: 0 1px 1px rgba(0, 0, 0, 1);
    }
  }
</style>
