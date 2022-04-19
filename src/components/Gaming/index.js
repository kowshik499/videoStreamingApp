import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaGamepad} from 'react-icons/fa'
import NxtWatchContext from '../NxtWatchContext'
import Header from '../Header'
import CategoryContainer from '../CategoryContainer'
import GameItem from '../GameItem'
import {
  CategoryAndVideosContainer,
  GameItemsList,
  LoaderContainer,
  BgContainer,
  GamingHeading,
  HeadingContainer,
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

class Gaming extends Component {
  state = {
    gamesData: [],
    requestStatus: requestStatusConstants.loading,
  }

  componentDidMount() {
    this.getVideosData()
  }

  updateGameVideoObject = object => ({
    id: object.id,
    title: object.title,
    thumbnailUrl: object.thumbnail_url,
    viewCount: object.view_count,
  })

  onSuccess = videoObjects => {
    const updatedObjectsList = videoObjects.map(each =>
      this.updateGameVideoObject(each),
    )

    this.setState({
      gamesData: updatedObjectsList,
    })
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {gamesData} = this.state

    return (
      <GameItemsList>
        {gamesData.map(eachGame => (
          <GameItem gameData={eachGame} key={eachGame.id} />
        ))}
      </GameItemsList>
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
              We are having some trouble
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
      default:
        return this.renderFailureView()
    }
  }

  getVideosData = async () => {
    this.setState({
      requestStatus: requestStatusConstants.loading,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
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
            <BgContainer darkMode={darkMode} data-testid="gaming">
              <Header />
              <CategoryAndVideosContainer>
                <CategoryContainer />
                <div>
                  <HeadingContainer darkMode={darkMode}>
                    <FaGamepad className="gaming-rout-heading-icon" />
                    <GamingHeading darkMode={darkMode}>Gaming</GamingHeading>
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

export default Gaming
