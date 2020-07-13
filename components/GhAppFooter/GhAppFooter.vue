<template>
  <section class="gh-app-footer bg-custom-spaceCadet">
    <div class="gh-app-footer__content flex justify-between items-center py-6 px-6 w-full">
      <div class="gh-app-footer__content-left text-white font-bold">
        {{ $t('global.copyright', { year: copyrightYear }) }}
      </div>

      <div class="gh-app-footer__content-right font-headline text-4xl text-custom-cyberGrapeA7">
        {{ $t('global.appName') }}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component
export default class GhAppFooter extends Vue {
  /**
   * Non-Reactive Properties
   */
  public copyrightYear: string = (new Date()).getFullYear().toString();
}
</script>
