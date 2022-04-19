import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import NxtWatchContext from '../NxtWatchContext'
import Header from '../Header'
import CategoryContainer from '../CategoryContainer'
import VideoItem from '../VideoItem'
import {
  CategoryAndVideosContainer,
  VideosListContainer,
  LoaderContainer,
  BgContainer,
  HeadingContainer,
  TrendingHeading,
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

class Trending extends Component {
  state = {
    videosData: [],
    requestStatus: requestStatusConstants.loading,
  }

  componentDidMount() {
    this.getVideosData()
  }

  updateVideoObject = object => ({
    id: object.id,
    title: object.title,
    thumbnailUrl: object.thumbnail_url,
    channel: object.channel,
    viewCount: object.view_count,
    publishedAt: object.published_at,
  })

  onSuccess = videoObjects => {
    let updatedObjectsList = []

    updatedObjectsList = videoObjects.map(each => this.updateVideoObject(each))

    this.setState({
      videosData: updatedObjectsList,
    })
  }

  onFailure = () => {
    this.setState({
      requestStatus: requestStatusConstants.failed,
    })
  }

  getVideosData = async () => {
    this.setState({
      requestStatus: requestStatusConstants.loading,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok === true) {
      this.setState({
        requestStatus: requestStatusConstants.success,
      })
      this.onSuccess(fetchedData.videos)
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
    const {videosData} = this.state
    return (
      <VideosListContainer>
        {videosData.map(eachVideo => (
          <VideoItem videoData={eachVideo} key={eachVideo.id} />
        ))}
      </VideosListContainer>
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
            </FailureViewDescription>
            <FailureViewDescription>Please try again.</FailureViewDescription>
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
      default:
        return this.renderFailureView()
    }
  }

  getVideosData = async () => {
    this.setState({
      requestStatus: requestStatusConstants.loading,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok === true) {
      this.setState({
        requestStatus: requestStatusConstants.success,
      })
      this.onSuccess(fetchedData.videos)
    } else {
      this.onFailure()
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <BgContainer darkMode={darkMode}>
              <Header />
              <CategoryAndVideosContainer>
                <CategoryContainer />
                <div>
                  <HeadingContainer darkMode={darkMode}>
                    <HiFire className="gaming-rout-heading-icon" />
                    <TrendingHeading darkMode={darkMode}>
                      Trending
                    </TrendingHeading>
                  </HeadingContainer>
                  {this.renderContent()}
                </div>
              </CategoryAndVideosContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
