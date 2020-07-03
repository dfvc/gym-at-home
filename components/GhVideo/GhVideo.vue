<template>
  <video
    ref="videoPlayer"
    :controls="controls"
    :loop="loop"
    :muted="muted"
    :autoplay="autoplay"
    :poster="require(`@/assets/videos/${name}.png`)"
    :src="require(`@/assets/videos/${name}.mp4`)"
    playsinline="playsinline"
    webkit-playsinline="true"
    x5-playsinline="true"
    x5-video-player-type="h5"
    x5-video-player-fullscreen="false"
  />
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
  @Prop({ type: Boolean, default: false })
  public controls: boolean;

  @Prop({ type: Boolean, default: true })
  public loop: boolean;

  @Prop({ type: Boolean, default: true })
  public muted: boolean;

  @Prop({ type: Boolean, default: true })
  public autoplay: boolean;

  @Prop({ type: String, default: '' })
  public poster: string;

  @Prop({ type: String, required: true })
  public name: string;

  @Prop({ type: String, default: '1.0' })
  public playbackRate: string;

  /**
   * Events
   */
  public mounted(): void {
    this.registerVideoEventListeners();
    (this.$refs.videoPlayer as HTMLVideoElement).playbackRate = parseFloat(this.playbackRate);
  }

  public beforeDestroy(): void {
    this.unregisterVideoEventListeners();
  }

  /**
   * Non-Reactive Properties
   */
  public registerVideoEventListeners(): void {
    const videoPlayer = (this.$refs.videoPlayer as HTMLVideoElement);

    videoPlayer.addEventListener(
      'loadedmetadata',
      this.onLoadVideoMetaData,
      false,
    );

    videoPlayer.addEventListener(
      'play',
      this.onPlayVideo,
      false,
    );

    videoPlayer.addEventListener(
      'ended',
      this.onEndVideo,
      false,
    );
  }

  public unregisterVideoEventListeners(): void {
    const videoPlayer = (this.$refs.videoPlayer as HTMLVideoElement);

    videoPlayer.removeEventListener(
      'loadedmetadata',
      this.onLoadVideoMetaData,
      false,
    );

    videoPlayer.removeEventListener(
      'play',
      this.onPlayVideo,
      false,
    );

    videoPlayer.removeEventListener(
      'ended',
      this.onEndVideo,
      false,
    );
  }

  public onLoadVideoMetaData(): void {
    this.$emit('videoMetaDataLoaded', (this.$refs.videoPlayer as HTMLVideoElement));
  }

  public onPlayVideo(): void {
    this.$emit('videoPlay');
  }

  public onEndVideo(): void {
    this.$emit('videoEnd');
  }
}
</script>
