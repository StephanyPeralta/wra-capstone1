import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';
import { useYoutubeVideo } from '../../hooks/useYoutubeVideo';
import { useYoutubeRelatedVideos } from '../../hooks/useYoutubeRelatedVideos';
import { usePreferences } from '../../providers/Preferences';
import VideoPlayer from '../../components/VideoPlayer';
import VideoList from '../../components/VideoList';
import VideoListFav from '../../components/VideoListFav';
import VideoCard from '../../components/VideoCard';
import {
  VideoSectionWrapper,
  RelatedVideos,
  LoaderContainer,
  Loader,
  ErrorAlert,
} from './Video.styled';
import { useParams } from 'react-router';

interface VideoPageParams {
  videoId: string;
}

function VideoPage() {
  let { videoId } = useParams<VideoPageParams>();
  const { video, isLoading, error } = useYoutubeVideo(videoId);
  const { relatedVideos } = useYoutubeRelatedVideos(videoId);

  const { favorites } = usePreferences();

  const favoritesMatch = useRouteMatch('/favorites/:videoId');

  const VideoListMain = favoritesMatch?.isExact ? VideoListFav : VideoList;

  const videoList = favoritesMatch?.isExact ? favorites : relatedVideos;

  if (error) {
    return (
      <ErrorAlert>
        <FiAlertCircle />
        <span className="error-msg"> Error loading page!</span>
      </ErrorAlert>
    );
  }

  if (isLoading) {
    return (
      <LoaderContainer data-testid="loader-icon1">
        <Loader size={60} />
      </LoaderContainer>
    );
  }

  // console.log(relatedVideos)
  return (
    <>
      {video && (
        <VideoSectionWrapper>
          <VideoPlayer {...video} />
          <RelatedVideos data-testid="related-videos">
            <VideoListMain>
              {videoList.map((video) => (
                <VideoCard
                  key={video.videoId}
                  videoId={video.videoId}
                  img={video.img}
                  title={video.title}
                  description={video.description}
                  publishDate={new Date(video.publishDate).toDateString()}
                  pathVideo={
                    favoritesMatch?.isExact
                      ? `/favorites/${video.videoId}`
                      : video.pathVideo
                  }
                />
              ))}
            </VideoListMain>
          </RelatedVideos>
        </VideoSectionWrapper>
      )}
    </>
  );
}

export default VideoPage;
