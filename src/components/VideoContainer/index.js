import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../NxtWatchContext'
import Header from '../Header'
import CategoryContainer from '../CategoryContainer'
import {
  BgContainer,
  CategoryAndVideosContainer,
  VideoDetailsContainer,
  VideoPlayerContainer,
  ViewsSubsContainer,
  LikeSaveContainer,
  InfoControlsContainer,
  LikeBtn,
  DisLikeBtn,
  SaveBtn,
  ProfileDescription,
  Profile,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
} from './styledComponents'

const requestStatusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class VideoContainer extends Component {
  state = {
    videoData: [],
    requestStatus: requestStatusConstants.loading,
  }

  componentDidMount = () => {
    this.getVideoData()
  }

  getUpdatedChannelData = channel => ({
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
    subscriberCount: channel.subscriber_count,
  })

  onSuccess = async videoDetailes => {
    const updatedVideoDetails = {
      id: videoDetailes.id,
      title: videoDetailes.title,
      videoUrl: videoDetailes.video_url,
      thumbnailUrl: videoDetailes.thumbnail_url,
      channel: await this.getUpdatedChannelData(videoDetailes.channel),
      viewCount: videoDetailes.view_count,
      publishedAt: videoDetailes.published_at,
      description: videoDetailes.description,
    }
    this.setState({
      videoData: updatedVideoDetails,
      requestStatus: requestStatusConstants.success,
    })
  }

  onFailure = () => {
    this.setState({
      requestStatus: requestStatusConstants.failed,
    })
  }

  getVideoData = async () => {
    this.setState({
      requestStatus: requestStatusConstants.loading,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      this.onSuccess(fetchedData.video_details)
    } else {
      this.onFailure()
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videoData} = this.state
    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoData
    const {name, profileImageUrl, subscriberCount} = channel
    const postedIn = formatDistanceToNow(new Date(publishedAt))
    const postedInList = postedIn.split(' ')
    const posted =
      postedInList.length === 3
        ? `${postedInList[1]} ${postedInList[2]} ago`
        : `${postedInList[0]} ${postedInList[1]} ago`

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            darkMode,
            addToSavedVideos,
            likedVideosIds,
            disLikedVideosIds,
            savedVideosIds,
            onClickLike,
            onClickDisLike,
          } = value
          const isLiked = likedVideosIds.includes(id)
          const isDisLiked = disLikedVideosIds.includes(id)
          const isSaved = savedVideosIds.includes(id)

          const onClickLikeBtn = () => {
            onClickLike(id)
          }

          const onClickDisLikeBtn = () => {
            onClickDisLike(id)
          }

          const onClickSaveVideo = () => {
            this.setState(prevState => ({
              isVideoSaved: !prevState.isVideoSaved,
            }))
            const videoDataObject = {
              videoDetailes: videoData,
              isLiked,
              isDisLiked,
            }
            addToSavedVideos(videoDataObject)
          }

          return (
            <VideoDetailsContainer>
              <VideoPlayerContainer>
                <div>
                  <ReactPlayer
                    className="react-player"
                    url={videoUrl}
                    width="74vw"
                    height="60vh"
                  />
                </div>
              </VideoPlayerContainer>
              <div>
                <p>{title}</p>
                <InfoControlsContainer>
                  <ViewsSubsContainer>
                    <p>{viewCount} views</p>
                    <BsDot />
                    <p>{posted}</p>
                  </ViewsSubsContainer>
                  <div>
                    <LikeSaveContainer>
                      <li>
                        <LikeBtn
                          type="button"
                          isLiked={isLiked}
                          color={darkMode}
                          onClick={onClickLikeBtn}
                        >
                          <BiLike />
                          Like
                        </LikeBtn>
                      </li>
                      <li>
                        <DisLikeBtn
                          type="button"
                          isDisLiked={isDisLiked}
                          color={darkMode}
                          onClick={onClickDisLikeBtn}
                        >
                          <BiDislike />
                          Dislike
                        </DisLikeBtn>
                      </li>
                      <li>
                        <SaveBtn
                          type="button"
                          isSaved={isSaved}
                          color={darkMode}
                          onClick={onClickSaveVideo}
                        >
                          <BiListPlus />
                          {isSaved ? 'Saved' : 'Save'}
                        </SaveBtn>
                      </li>
                    </LikeSaveContainer>
                  </div>
                </InfoControlsContainer>
              </div>
              <hr />
              <div>
                <ProfileDescription>
                  <Profile src={profileImageUrl} alt="channel logo" />
                  <div>
                    <p>{name}</p>
                    <p>{subscriberCount} subscribers</p>
                    <p>{description}</p>
                  </div>
                </ProfileDescription>
              </div>
            </VideoDetailsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        const imageUrl = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureViewImage src={imageUrl} alt="failure view" />
            <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
            <FailureViewDescription>
              We are having some trouble to complete your request.
              <br /> Please try again.
            </FailureViewDescription>
            <RetryButton type="button" onClick={this.getVideoData}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderContent = () => {
    const {requestStatus} = this.state
    switch (requestStatus) {
      case requestStatusConstants.loading:
        return this.renderLoadingView()
      case requestStatusConstants.success:
        return this.renderSuccessView()
      case requestStatusConstants.failed:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <BgContainer darkMode={darkMode} data-testid="videoItemDetails">
              <Header />
              <CategoryAndVideosContainer>
                <CategoryContainer />
                {this.renderContent()}
              </CategoryAndVideosContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoContainer
