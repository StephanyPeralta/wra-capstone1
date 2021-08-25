import React from 'react';

import { useSelector } from '../../providers/Selector';
import { useVideo } from '../../providers/Video';
import VideoCard from '../../components/VideoCard';
import { FavContainer, VideoWrapper, ErrorAlert } from './Favorites.styled';

function Favorites() {
  const { state } = useVideo();
  const { favorites } = useSelector();

  return (
    <FavContainer>
      {favorites.length === 0 ? (
        <ErrorAlert>There are no videos added to your favorites list yet</ErrorAlert>
      ) : (
        <>
          <h1 className="fav-title">My Favorite Videos</h1>
          <VideoWrapper className={!state.searchStatus ? 'related-list' : ''}>
            {favorites.map((video) => (
              <VideoCard
                key={video.videoId}
                videoId={video.videoId}
                img={video.img}
                title={video.title}
                description={video.description}
                publishDate={new Date(video.publishDate).toDateString()}
                pathVideo={`/favorites/${video.videoId}`}
              />
            ))}
          </VideoWrapper>
        </>
      )}
    </FavContainer>
  );
}

export default Favorites;
