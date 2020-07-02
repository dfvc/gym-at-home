<template>
  <div class="gh-app-footer bg-green-700">
    {{ test }}
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class GhAppFooter extends Vue {
  /**
   * Interface
   */
  @Prop({ type: String, default: '' })
  public test: string;
}
</script>
