<template>
  <section class="gh-intro-teaser relative flex justify-center items-center h-screen overflow-hidden">
    <GhVideo
      :name="teaserData.videoSrc"
      :poster="teaserData.poster"
      :playback-rate="videoPlaybackRate"
      :loop="true"
      :loop-interval="videoLoopInterval"
      class="gh-intro-teaser__video absolute inset-0 min-w-full min-h-full object-cover"
      @videoMetaDataLoaded="onVideoMetaDataLoaded"
      @videoPlay="onVideoPlay"
      @videoEnd="onVideoEnd"
    />

    <div
      :class="foregroundDynamicClassList"
      class="gh-intro-teaser__bg-overlay absolute inset-0 min-w-full min-h-full bg-custom-maximumYellow transition-opacity"
    />

    <div class="gh-intro-teaser__fg-overlay absolute inset-0 flex justify-center lg:justify-end items-end min-w-full min-h-full">
      <div class="flex flex-col justify-center lg:items-center p-8 md:p-16 transition-opacity">
        <span
          :class="teaserTextDynamicClassList"
          class="font-headline text-5xl uppercase text-center leading-none"
        >
          {{ $t(teaserData.teaserText) }}
        </span>
        <button
          :class="teaserCtaDynamicClassList"
          class="gh-button gh-button--outlined gh-button--cta gh-button--lg gh-button--white mt-3"
          type="button"
        >
          {{ $t(teaserData.teaserCtaButton) }}
        </button>
      </div>
    </div>

    <div
      :class="teaserLogoClassList"
      class="gh-intro-teaser__logo absolute inset-0 flex justify-center items-center min-w-full min-h-full"
    >
      <svg viewBox="0 0 466.301 84.602" xmlns="http://www.w3.org/2000/svg">
        <g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" fill="currentColor">
          <path d="M 227.101 31.002 L 226.601 51.302 A 7.675 7.675 0 0 0 226.696 52.57 Q 227.076 54.822 228.966 54.899 A 3.333 3.333 0 0 0 229.101 54.902 A 4.669 4.669 0 0 0 232.345 53.56 Q 233.062 52.899 233.696 51.911 A 13.81 13.81 0 0 0 234.551 50.352 Q 236.701 45.802 236.701 38.502 A 33.058 33.058 0 0 0 235.737 30.305 A 23.742 23.742 0 0 0 229.851 19.552 Q 223.001 12.402 210.701 12.402 Q 199.338 12.402 192.187 17.391 A 23.17 23.17 0 0 0 188.351 20.752 A 27.903 27.903 0 0 0 181.963 32.818 Q 180.859 37.073 180.72 42.1 A 52.868 52.868 0 0 0 180.701 43.552 Q 180.701 53.616 184.315 60.237 A 21.83 21.83 0 0 0 188.151 65.352 A 24.689 24.689 0 0 0 200.146 71.793 A 37.101 37.101 0 0 0 208.601 72.702 A 65.739 65.739 0 0 0 213.931 72.465 Q 219.448 72.014 226.601 70.702 L 226.601 82.402 Q 217.501 84.602 208.301 84.602 Q 199.101 84.602 191.851 82.202 Q 184.601 79.802 178.901 74.952 Q 173.201 70.102 170.001 62.002 Q 166.801 53.902 166.801 43.402 A 46.971 46.971 0 0 1 169.459 27.326 A 41.282 41.282 0 0 1 178.901 12.402 A 40.596 40.596 0 0 1 204.507 0.305 A 55.747 55.747 0 0 1 210.401 0.002 A 57.396 57.396 0 0 1 222.163 1.132 Q 233.213 3.447 240.201 10.502 A 35.049 35.049 0 0 1 249.635 28.632 A 50.976 50.976 0 0 1 250.601 38.802 A 38.858 38.858 0 0 1 249.528 48.167 A 28.498 28.498 0 0 1 244.101 59.302 A 21.16 21.16 0 0 1 229.7 67.162 A 30.745 30.745 0 0 1 225.801 67.402 L 224.901 67.402 A 21.429 21.429 0 0 1 220.819 67.042 Q 215.704 66.047 213.501 62.302 L 213.001 62.302 A 11.907 11.907 0 0 1 205.616 66.998 A 18.832 18.832 0 0 1 201.601 67.402 A 14.614 14.614 0 0 1 197.869 66.953 A 10.052 10.052 0 0 1 192.551 63.602 Q 189.773 60.251 189.445 54.722 A 25.663 25.663 0 0 1 189.401 53.202 A 20.844 20.844 0 0 1 189.786 49.044 Q 190.273 46.653 191.378 44.873 A 9.729 9.729 0 0 1 194.551 41.702 Q 199.133 38.854 208.425 37.749 A 83.64 83.64 0 0 1 210.801 37.502 L 210.801 35.102 A 4.031 4.031 0 0 0 210.662 33.993 Q 210.177 32.302 208.001 32.302 A 21.164 21.164 0 0 0 205.438 32.483 Q 201.051 33.027 193.401 35.202 L 191.001 20.902 A 177.16 177.16 0 0 1 198.373 19.161 Q 205.266 17.701 210.137 17.387 A 39.214 39.214 0 0 1 212.651 17.302 Q 220.189 17.302 223.6 20.506 A 8.457 8.457 0 0 1 223.701 20.602 A 9.997 9.997 0 0 1 226.084 24.372 Q 226.672 25.96 226.92 27.928 A 24.621 24.621 0 0 1 227.101 31.002 Z M 136.401 22.902 L 137.401 22.002 A 20.243 20.243 0 0 1 142.893 18.589 A 17.312 17.312 0 0 1 149.501 17.302 Q 155.816 17.302 158.515 20.094 A 6.592 6.592 0 0 1 158.751 20.352 Q 160.767 22.673 161.249 26.76 A 23.45 23.45 0 0 1 161.401 29.502 L 161.401 66.402 L 144.401 66.402 L 144.401 35.202 Q 144.401 33.051 142.773 32.75 A 3.152 3.152 0 0 0 142.201 32.702 A 9.273 9.273 0 0 0 139.998 32.951 A 6.932 6.932 0 0 0 137.501 34.102 L 137.501 66.402 L 120.501 66.402 L 120.501 35.202 Q 120.501 33.051 118.873 32.75 A 3.152 3.152 0 0 0 118.301 32.702 A 9.273 9.273 0 0 0 116.098 32.951 A 6.932 6.932 0 0 0 113.601 34.102 L 113.601 66.402 L 96.801 66.402 L 96.801 18.502 L 112.101 18.502 L 113.101 22.002 L 113.501 22.002 Q 119.001 17.302 126.551 17.302 A 15.546 15.546 0 0 1 130.167 17.691 Q 134.707 18.778 136.401 22.902 Z M 395.701 22.902 L 396.701 22.002 A 20.243 20.243 0 0 1 402.193 18.589 A 17.312 17.312 0 0 1 408.801 17.302 Q 415.116 17.302 417.815 20.094 A 6.592 6.592 0 0 1 418.051 20.352 Q 420.067 22.673 420.549 26.76 A 23.45 23.45 0 0 1 420.701 29.502 L 420.701 66.402 L 403.701 66.402 L 403.701 35.202 Q 403.701 33.051 402.073 32.75 A 3.152 3.152 0 0 0 401.501 32.702 A 9.273 9.273 0 0 0 399.298 32.951 A 6.932 6.932 0 0 0 396.801 34.102 L 396.801 66.402 L 379.801 66.402 L 379.801 35.202 Q 379.801 33.051 378.173 32.75 A 3.152 3.152 0 0 0 377.601 32.702 A 9.273 9.273 0 0 0 375.398 32.951 A 6.932 6.932 0 0 0 372.901 34.102 L 372.901 66.402 L 356.101 66.402 L 356.101 18.502 L 371.401 18.502 L 372.401 22.002 L 372.801 22.002 Q 378.301 17.302 385.851 17.302 A 15.546 15.546 0 0 1 389.467 17.691 Q 394.007 18.778 395.701 22.902 Z M 303.301 4.302 L 303.301 66.402 L 286.301 66.402 L 286.301 42.902 L 274.601 42.902 L 274.601 66.402 L 257.401 66.402 L 257.401 4.302 L 274.601 4.302 L 274.601 28.702 L 286.301 28.702 L 286.301 4.302 L 303.301 4.302 Z M 41.901 6.502 L 39.201 22.802 A 124.836 124.836 0 0 0 34.723 21.533 Q 30.406 20.403 27.478 20.056 A 19.964 19.964 0 0 0 25.151 19.902 A 7.789 7.789 0 0 0 22.699 20.264 Q 20.198 21.09 19.051 23.802 A 15.412 15.412 0 0 0 18.253 26.355 Q 17.609 29.169 17.451 33.326 A 74.85 74.85 0 0 0 17.401 36.152 Q 17.401 42.825 18.368 46.63 A 14.371 14.371 0 0 0 18.951 48.452 Q 20.501 52.302 25.301 52.302 A 8.818 8.818 0 0 0 26.1 52.258 Q 27.278 52.148 29.349 51.763 A 100.734 100.734 0 0 0 30.701 51.502 L 30.701 43.902 L 26.201 43.902 L 26.201 32.102 L 45.301 32.102 L 45.301 66.402 L 33.501 66.402 L 31.901 63.202 L 31.501 63.202 A 85.525 85.525 0 0 1 30.694 63.858 Q 29.819 64.561 29.174 65.034 A 21.213 21.213 0 0 1 28.801 65.302 A 9.427 9.427 0 0 1 25.91 66.737 Q 24.606 67.142 23.031 67.3 A 21.341 21.341 0 0 1 20.901 67.402 Q 0.587 67.402 0.017 37.549 A 91.601 91.601 0 0 1 0.001 35.802 Q 0.001 25.838 2.188 18.837 A 28.37 28.37 0 0 1 5.501 11.652 A 17.607 17.607 0 0 1 15.929 4.294 Q 19.519 3.302 24.001 3.302 A 56.791 56.791 0 0 1 32.26 3.871 Q 37.565 4.652 41.901 6.502 Z M 77.401 18.502 L 93.801 18.502 L 81.401 67.802 A 32.973 32.973 0 0 1 80.19 71.612 Q 78.523 75.871 75.992 77.995 A 9.845 9.845 0 0 1 75.801 78.152 A 10.928 10.928 0 0 1 72.702 79.831 Q 69.213 81.102 63.701 81.102 L 53.701 81.102 L 52.201 68.202 L 57.801 68.202 Q 60.906 68.202 61.175 65.949 A 3.775 3.775 0 0 0 61.201 65.502 Q 61.201 64.902 60.801 62.902 L 49.301 18.502 L 67.101 18.502 L 71.601 48.402 L 72.501 48.402 L 77.401 18.502 Z M 465.601 47.202 L 442.801 47.202 Q 442.801 54.702 449.701 54.702 A 16.707 16.707 0 0 0 451.446 54.591 Q 454.28 54.287 459.426 53.138 A 210.884 210.884 0 0 0 462.601 52.402 L 464.001 64.802 Q 455.601 67.402 447.201 67.402 A 25.098 25.098 0 0 1 440.687 66.604 A 17.517 17.517 0 0 1 431.401 60.652 Q 425.901 53.902 425.901 42.302 A 42.975 42.975 0 0 1 426.827 32.944 Q 429.782 19.75 442.175 17.685 A 29.976 29.976 0 0 1 447.101 17.302 Q 453.221 17.302 457.276 19.05 A 12.92 12.92 0 0 1 461.851 22.252 Q 465.605 26.428 466.192 33.63 A 34.15 34.15 0 0 1 466.301 36.402 A 11.95 11.95 0 0 1 466.29 36.833 Q 466.213 38.802 465.601 47.202 Z M 309.501 42.252 Q 309.501 29.102 314.551 23.202 A 15.692 15.692 0 0 1 321.747 18.523 Q 324.357 17.664 327.55 17.409 A 35.194 35.194 0 0 1 330.351 17.302 A 31.422 31.422 0 0 1 336.147 17.799 Q 342.536 19.001 346.001 23.102 A 17.033 17.033 0 0 1 348.89 28.232 Q 350.63 32.931 350.864 39.919 A 66.587 66.587 0 0 1 350.901 42.152 A 57.947 57.947 0 0 1 350.531 48.943 Q 349.694 56.011 346.959 60.211 A 15.036 15.036 0 0 1 346.101 61.402 A 14.725 14.725 0 0 1 339.279 66.083 Q 336.806 66.948 333.755 67.246 A 34.599 34.599 0 0 1 330.401 67.402 A 31.217 31.217 0 0 1 324.467 66.876 Q 321.145 66.232 318.6 64.798 A 14.635 14.635 0 0 1 314.501 61.402 A 18.062 18.062 0 0 1 311.457 55.905 Q 309.501 50.477 309.501 42.252 Z M 326.301 41.202 L 326.301 43.602 A 113.077 113.077 0 0 0 326.334 46.469 Q 326.454 51.161 327.001 52.802 A 3.058 3.058 0 0 0 327.753 54.05 Q 328.627 54.902 330.251 54.902 A 4.684 4.684 0 0 0 331.473 54.754 Q 332.892 54.37 333.432 52.99 A 3.88 3.88 0 0 0 333.501 52.802 A 8.476 8.476 0 0 0 333.79 51.575 Q 334.201 49.178 334.201 44.202 L 334.201 41.302 A 102.502 102.502 0 0 0 334.17 38.673 Q 334.077 35.09 333.711 33.406 A 6.324 6.324 0 0 0 333.551 32.802 Q 332.94 30.922 330.606 30.809 A 6.319 6.319 0 0 0 330.301 30.802 A 5.164 5.164 0 0 0 329.119 30.927 Q 327.526 31.302 327.001 32.802 A 7.429 7.429 0 0 0 326.728 33.887 Q 326.373 35.812 326.313 39.593 A 101.806 101.806 0 0 0 326.301 41.202 Z M 442.501 38.702 L 451.201 38.702 L 451.201 36.302 Q 451.201 31.602 446.701 31.602 Q 444.101 31.602 443.301 33.352 Q 442.501 35.102 442.501 38.702 Z M 211.501 51.802 L 211.501 46.902 Q 207.801 47.402 206.251 48.452 Q 204.83 49.414 204.712 51.593 A 7.499 7.499 0 0 0 204.701 52.002 Q 204.701 55.269 207.118 55.651 A 4.375 4.375 0 0 0 207.801 55.702 A 5.042 5.042 0 0 0 209.287 55.501 Q 210.921 54.997 211.349 53.221 A 6.078 6.078 0 0 0 211.501 51.802 Z" />
        </g>
      </svg>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import {
  CTA_FADE_DURATION_MS,
  LOGO_FADE_DURATION_MS,
  NEXT_TEASER_SCROLL_DELAY,
  TEXT_FADE_DURATION_MS,
  VIDEO_FADE_DURATION_MS,
  VIDEO_LOOP_INTERVAL,
  VIDEO_PLAYBACK_RATE,
} from '~/components/GhIntroTeaser/gh-intro-teaser.constant';
import { data } from '~/components/GhIntroTeaser/gh-intro-teaser.data';

@Component
export default class GhIntroTeaser extends Vue {
  /**
   * Interface
   */
  public videoPlaybackRate: string = VIDEO_PLAYBACK_RATE;

  public videoLoopInterval: number = VIDEO_LOOP_INTERVAL;

  public teaserData: { [key: string]: string } = data;

  public foregroundDynamicClassList: string = 'opacity-75';

  public teaserTextDynamicClassList: string = 'opacity-0';

  public teaserCtaDynamicClassList: string = 'opacity-0';

  public teaserLogoClassList: string = 'opacity-0';

  public videoPlaybackCount: number = 0;

  /**
   * Non-Reactive Properties
   */
  public onVideoPlay(): void {
    this.hideLogo();

    if (this.videoPlaybackCount) return;

    this.showVideo();
  }

  public onVideoEnd(): void {
    this.videoPlaybackCount ++;
    this.updateTeaserText();
    this.showLogo();
  }

  public onVideoMetaDataLoaded(video: HTMLVideoElement): void {
    const hideVideoTimeout = (video.duration * 1000 - VIDEO_FADE_DURATION_MS) / parseFloat(VIDEO_PLAYBACK_RATE);
    const showTeaserTextTimeout = 6000;
    const showTeaserCtaTimeout = 8500;
    const scrollToNextTeaserTimeout = (video.duration * 1000 + NEXT_TEASER_SCROLL_DELAY) / parseFloat(VIDEO_PLAYBACK_RATE);

    setTimeout(() => {
      this.hideVideo();
    }, hideVideoTimeout);

    setTimeout(() => {
      this.showTeaserText();
    }, showTeaserTextTimeout);

    setTimeout(() => {
      this.showTeaserCta();
    }, showTeaserCtaTimeout);

    setTimeout(() => {
      this.scrollToNextTeaser();
    }, scrollToNextTeaserTimeout);
  }

  public showVideo(): void {
    this.foregroundDynamicClassList = `duration-${VIDEO_FADE_DURATION_MS} opacity-0`;
  }

  public hideVideo(): void {
    this.foregroundDynamicClassList = `duration-${VIDEO_FADE_DURATION_MS} opacity-75`;
  }

  public showTeaserText(): void {
    this.teaserTextDynamicClassList = `duration-${TEXT_FADE_DURATION_MS} opacity-100 text-orange-400`;
  }

  public updateTeaserText(): void {
    this.teaserTextDynamicClassList = `duration-${TEXT_FADE_DURATION_MS} opacity-100 text-white`;
  }

  public showTeaserCta(): void {
    this.teaserCtaDynamicClassList = `duration-${CTA_FADE_DURATION_MS} opacity-100`;
  }

  public updateTeaserCta(): void {
    this.teaserCtaDynamicClassList = `duration-${CTA_FADE_DURATION_MS} opacity-100`;
  }

  public showLogo(): void {
    this.teaserLogoClassList = `duration-${LOGO_FADE_DURATION_MS} opacity-100`;
  }

  public hideLogo(): void {
    this.teaserLogoClassList = `duration-${LOGO_FADE_DURATION_MS} opacity-0`;
  }

  public scrollToNextTeaser(): void {
    const scrollOffset = parseInt(
      getComputedStyle(this.$el as HTMLElement).height.replace('px', ''),
    );
    window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
  }
}
</script>

<style lang="scss" scoped>
  .gh-intro-teaser {
    margin-top: calc(-1 * theme('spacing.12'));

    @screen lg {
      margin-top: calc(-1 * theme('spacing.16'));
    }

    &__logo {
      svg {
        @apply text-custom-spaceCadet;
        width: 35%;
        min-width: 300px;
      }
    }
  }
</style>
