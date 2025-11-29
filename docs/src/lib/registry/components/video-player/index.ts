import VideoPlayer from "./video-player.svelte";
import VideoPlayerContent from "./video-player-content.svelte";
import VideoPlayerControlBar from "./video-player-control-bar.svelte";
import VideoPlayerMuteButton from "./video-player-mute-button.svelte";
import VideoPlayerPlayButton from "./video-player-play-button.svelte";
import VideoPlayerSeekBackwardButton from "./video-player-seek-backward-button.svelte";
import VideoPlayerSeekForwardButton from "./video-player-seek-forward-button.svelte";
import VideoPlayerTimeDisplay from "./video-player-time-display.svelte";
import VideoPlayerTimeRange from "./video-player-time-range.svelte";
import VideoPlayerVolumeRange from "./video-player-volume-range.svelte";

export {
    VideoPlayer,
    VideoPlayerContent,
    VideoPlayerControlBar,
    VideoPlayerMuteButton,
    VideoPlayerPlayButton,
    VideoPlayerSeekBackwardButton,
    VideoPlayerSeekForwardButton,
    VideoPlayerTimeDisplay,
    VideoPlayerTimeRange,
    VideoPlayerVolumeRange,

    VideoPlayer as Root,
    VideoPlayerContent as Content,
    VideoPlayerControlBar as ControlBar,
    VideoPlayerMuteButton as MuteButton,
    VideoPlayerPlayButton as PlayButton,
    VideoPlayerSeekBackwardButton as SeekBackwardButton,
    VideoPlayerSeekForwardButton as SeekForwardButton,
    VideoPlayerTimeDisplay as TimeDisplay,
    VideoPlayerTimeRange as TimeRange,
    VideoPlayerVolumeRange as VolumeRange
};
