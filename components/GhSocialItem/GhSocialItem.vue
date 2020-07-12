<template>
  <a
    :href="url"
    :title="name"
    target="_blank"
    class="gh-social-item flex justify-center items-center bg-custom-viridianGreen rounded-full p-8 hover:bg-custom-blueSapphire transition-color duration-200"
  >
    <GhIcon
      :name="name.toLowerCase()"
      class="text-white h-16 w-16"
    />
  </a>
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
  public name: string;

  @Prop({ type: String, required: true })
  public url: string;
}
</script>

<style lang="scss" scoped>
  .gh-social-item {
    height: 140px;
    width: 140px;
  }
</style>
