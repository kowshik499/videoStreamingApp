import Header from '../Header'
import CategoryContainer from '../CategoryContainer'
import NxtWatchContext from '../NxtWatchContext'
import {
  BgContainer,
  CategoryAndVideosContainer,
  NotFoundContainer,
  NotFoundImg,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode} = value
      const imageUrl = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <BgContainer darkMode={darkMode}>
          <Header />
          <CategoryAndVideosContainer>
            <CategoryContainer />
            <NotFoundContainer>
              <NotFoundImg src={imageUrl} alt="not found" />
              <h1>Page Not Found</h1>
              <p>We are sorry, the page you requested could not be found.</p>
            </NotFoundContainer>
          </CategoryAndVideosContainer>
        </BgContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
