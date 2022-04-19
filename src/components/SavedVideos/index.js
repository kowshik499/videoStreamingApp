import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import NxtWatchContext from '../NxtWatchContext'
import Header from '../Header'
import CategoryContainer from '../CategoryContainer'
import {
  BgContainer,
  CategoryVideosContainer,
  VideoItemContainer,
  Thumbnail,
  Detailes,
  DetailsHeading,
  DetailsContainer,
  ViewsPublishedContainer,
  NoVideosContainer,
  NoVideosImg,
  HeadingContainer,
  TrendingHeading,
  SavedVideosContainer,
} from './styledComponents'

const SavedVideos = () => {
  const videoItem = videoData => {
    const {videoDetailes} = videoData
    console.log(videoDetailes)
    const {
      id,
      thumbnailUrl,
      title,
      viewCount,
      channel,
      publishedAt,
    } = videoDetailes
    const postedIn = formatDistanceToNow(new Date(publishedAt))
    const postedInList = postedIn.split(' ')
    const posted =
      postedInList.length === 3
        ? `${postedInList[1]} ${postedInList[2]} ago`
        : `${postedInList[0]} ${postedInList[1]} ago`

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <Link to={`/videos/${id}`} className="link">
              <VideoItemContainer key={id}>
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <DetailsContainer>
                  <DetailsHeading darkMode={darkMode}>{title}</DetailsHeading>
                  <Detailes>{channel.name}</Detailes>
                  <ViewsPublishedContainer>
                    <Detailes>{viewCount} views</Detailes>
                    <Detailes>{posted}</Detailes>
                  </ViewsPublishedContainer>
                </DetailsContainer>
              </VideoItemContainer>
            </Link>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode, savedVideos} = value

        return (
          <BgContainer darkMode={darkMode} data-testid="savedVideos">
            <Header />
            <CategoryVideosContainer>
              <CategoryContainer />
              {savedVideos.length === 0 ? (
                <NoVideosContainer>
                  <NoVideosImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <h1>No saved videos found</h1>
                  <p>You can save your videos while watching them</p>
                </NoVideosContainer>
              ) : (
                <div>
                  <HeadingContainer darkMode={darkMode}>
                    <HiFire className="gaming-rout-heading-icon" />
                    <TrendingHeading darkMode={darkMode}>Saved</TrendingHeading>
                  </HeadingContainer>
                  <SavedVideosContainer>
                    {savedVideos.map(eachVideo => videoItem(eachVideo))}
                  </SavedVideosContainer>
                </div>
              )}
            </CategoryVideosContainer>
          </BgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
