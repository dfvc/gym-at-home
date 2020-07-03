<template>
  <section class="gh-intro-teaser relative flex justify-center items-center h-screen overflow-hidden">
    <GhVideo
      :name="teaserData.videoSrc"
      :poster="teaserData.poster"
      :playback-rate="videoPlaybackRate"
      :loop="false"
      class="gh-intro-teaser__video absolute inset-0 min-w-full min-h-full object-cover"
      @videoMetaDataLoaded="onVideoMetaDataLoaded"
      @videoPlay="onVideoPlay"
      @videoEnd="onVideoEnd"
    />

    <div
      :class="foregroundDynamicClassList"
      class="gh-intro-teaser__bg-overlay absolute inset-0 min-w-full min-h-full bg-yellow-700 transition-opacity"
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
  </section>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import {
  CTA_FADE_DURATION_MS,
  TEXT_FADE_DURATION_MS,
  VIDEO_FADE_DURATION_MS,
  VIDEO_PLAYBACK_RATE,
} from '~/components/GhIntroTeaser/gh-intro-teaser.constant';
import { data } from '~/components/GhIntroTeaser/gh-intro-teaser.data';

@Component
export default class GhIntroTeaser extends Vue {
  /**
   * Interface
   */
  @Prop({ type: String, default: '' })
  public test: string;

  public videoPlaybackRate: string = VIDEO_PLAYBACK_RATE;

  public teaserData: { [key: string]: string } = data;

  public foregroundDynamicClassList: string = 'opacity-75';

  public teaserTextDynamicClassList: string = 'opacity-0';

  public teaserCtaDynamicClassList: string = 'opacity-0';

  /**
   * Non-Reactive Properties
   */
  public onVideoPlay(): void {
    this.showVideo();
  }

  public onVideoEnd(): void {
    this.updateTeaserText();
  }

  public onVideoMetaDataLoaded(video: HTMLVideoElement): void {
    const videoDurationInMs = (video.duration * 1000 - VIDEO_FADE_DURATION_MS) / parseFloat(VIDEO_PLAYBACK_RATE);

    setTimeout(() => {
      this.hideVideo();
    }, videoDurationInMs);

    setTimeout(() => {
      this.showTeaserText();
    }, 6000);

    setTimeout(() => {
      this.showTeaserCta();
    }, 8500);
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
}
</script>

<style lang="scss" scoped>
  .gh-intro-teaser {
    margin-top: calc(-1 * theme('spacing.12'));

    @screen lg {
      margin-top: calc(-1 * theme('spacing.16'));
    }
  }
</style>
