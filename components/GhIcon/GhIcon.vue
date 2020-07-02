<template>
  <inline-svg
    :src="require(`@/assets/images/icons/${name}.svg`)"
    :aria-label="computedTitle"
    class="fill-current h-1 w-1"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import {
  Component,
  Prop,
} from 'vue-property-decorator';
import InlineSvg from 'vue-inline-svg';

@Component({
  components: {
    InlineSvg,
  },
})
export default class GhIcon extends Vue {
  /**
   * Interface
   */
  @Prop({ type: String, required: true })
  public name: string;

  @Prop({ type: String, default: '' })
  public title: string;

  /**
   * Local State
   */
  public get computedTitle(): string|boolean {
    return this.title.length ? this.title : false;
  }
}
</script>
