import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../NxtWatchContext'
import Header from '../Header'
import VideoItem from '../VideoItem'
import CategoryContainer from '../CategoryContainer'
import {
  BgContainer,
  CategoryAndVideosContainer,
  PromotionCard,
  Logo,
  VideosListContainer,
  VideosContainer,
  BuyNowButton,
  SearchInput,
  SearchButton,
  SearchInputContainer,
  VideosItemsList,
  NoVideosFoundImg,
  LoaderContainer,
  NoVideosFoundContainer,
  RetryBtn,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
  NoVideosFoundHeading,
  NoVideosFoundText,
} from './styledComponents'

const requestStatusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class Home extends Component {
  state = {
    searchInput: '',
    close: true,
    videosData: [],
    requestStatus: requestStatusConstants.loading,
  }

  componentDidMount() {
    this.getVideosData()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} />
    </LoaderContainer>
  )

  changeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickClose = () => {
    this.setState(prevState => ({
      close: !prevState.close,
    }))
  }

  renderSuccessView = () => {
    const {close, videosData} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <VideosContainer close={close}>
              {videosData.length === 0 ? (
                <NoVideosFoundContainer darkMode={darkMode}>
                  <NoVideosFoundImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <NoVideosFoundHeading darkMode={darkMode}>
                    No Search results found
                  </NoVideosFoundHeading>
                  <NoVideosFoundText darkMode={darkMode}>
                    Try different key words or remove search filter
                  </NoVideosFoundText>
                  <RetryBtn type="button" onClick={this.getVideosData}>
                    Retry
                  </RetryBtn>
                </NoVideosFoundContainer>
              ) : (
                <VideosItemsList>
                  {videosData.map(eachVideo => (
                    <VideoItem videoData={eachVideo} key={eachVideo.id} />
                  ))}
                </VideosItemsList>
              )}
            </VideosContainer>
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
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onChangeSearInput = input => {
    this.setState(
      {
        searchInput: input,
      },
      this.getVideosData,
    )
  }

  render() {
    const {close, searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <BgContainer darkMode={darkMode}>
              <Header />
              <CategoryAndVideosContainer>
                <CategoryContainer />
                <VideosListContainer>
                  {close && (
                    <PromotionCard data-testid="close">
                      <div>
                        <Logo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <p>
                          Buy Nxt Watch Premium
                          <br />
                          UPI
                        </p>
                        <BuyNowButton type="button">GET IT NOW</BuyNowButton>
                      </div>
                      <AiOutlineClose onClick={this.onClickClose} />
                    </PromotionCard>
                  )}
                  <SearchInputContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      onChange={this.changeSearchInput}
                      value={searchInput}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      type="button"
                      onClick={this.getVideosData}
                    >
                      <BsSearch />
                    </SearchButton>
                  </SearchInputContainer>
                  {this.renderContent()}
                </VideosListContainer>
              </CategoryAndVideosContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
