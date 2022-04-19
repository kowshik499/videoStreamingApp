import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../NxtWatchContext'
import {
  VideoItemContainer,
  VideoThumbnail,
  DescriptionContainer,
  PublisherProfile,
  Title,
  Views,
  Published,
  Name,
  InfoContainer,
} from './styledComponents'

const VideoItem = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData
  const updatedChannelData = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }
  const {name, profileImageUrl} = updatedChannelData
  const postedIn = formatDistanceToNow(new Date(publishedAt))
  const postedInList = postedIn.split(' ')
  const posted =
    postedInList.length === 3
      ? `${postedInList[1]} ${postedInList[2]} ago`
      : `${postedInList[0]} ${postedInList[1]} ago`

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode, changeCategory} = value

        const onClickVideoItem = () => {
          changeCategory('')
        }

        return (
          <Link to={`/videos/${id}`} className="link">
            <VideoItemContainer onClick={onClickVideoItem}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer>
                <PublisherProfile src={profileImageUrl} alt="channel logo" />
                <div>
                  <Title darkMode={darkMode}>{title}</Title>
                  <Name>{name}</Name>
                  <InfoContainer>
                    <Views>{viewCount}</Views>
                    <BsDot />
                    <Published>{posted}</Published>
                  </InfoContainer>
                </div>
              </DescriptionContainer>
            </VideoItemContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
