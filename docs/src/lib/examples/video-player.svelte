<script lang="ts">
    import * as VideoPlayer from "$lib/registry/components/video-player";
</script>

<VideoPlayer.Root class="overflow-hidden rounded-lg border">
    <VideoPlayer.Content 
        crossorigin=""
        muted
        preload="auto"
        src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
    />

    <VideoPlayer.ControlBar>
        <VideoPlayer.PlayButton />
        <VideoPlayer.SeekBackwardButton />
        <VideoPlayer.SeekForwardButton />
        <VideoPlayer.TimeRange />
        <VideoPlayer.TimeDisplay showDuration />
        <VideoPlayer.MuteButton />
        <VideoPlayer.VolumeRange />
    </VideoPlayer.ControlBar>
</VideoPlayer.Root>
