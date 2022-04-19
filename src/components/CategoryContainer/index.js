import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {FaGamepad} from 'react-icons/fa'
import {RiMenuAddLine} from 'react-icons/ri'
import NxtWatchContext from '../NxtWatchContext'
import {
  CategorySection,
  CategoryButtonsContainer,
  ContactItemsContainer,
  ContactContainer,
  ContactHeading,
  ContactIcon,
  CategoryButton,
  ContactUsDescription,
} from './styledComponents'
import './index.css'

const CategoryContainer = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode, category, changeCategory} = value

      const onClickHome = () => {
        changeCategory('HOME')
      }

      const onClickTrending = () => {
        changeCategory('TRENDING')
      }

      const onClickGaming = () => {
        changeCategory('GAMING')
      }

      const onClickSaved = () => {
        changeCategory('SAVED')
      }
      return (
        <CategorySection darkMode={darkMode}>
          <div>
            <CategoryButtonsContainer>
              <Link to="/" className="link">
                <li>
                  <CategoryButton
                    type="button"
                    isActive={category === 'HOME'}
                    darkMode={darkMode}
                    onClick={onClickHome}
                  >
                    <AiFillHome
                      className={category === 'HOME' ? 'active-icon' : 'icon'}
                    />
                    Home
                  </CategoryButton>
                </li>
              </Link>
              <Link to="/trending" className="link">
                <li>
                  <CategoryButton
                    isActive={category === 'TRENDING'}
                    type="button"
                    darkMode={darkMode}
                    onClick={onClickTrending}
                  >
                    <HiFire
                      className={
                        category === 'TRENDING' ? 'active-icon' : 'icon'
                      }
                    />
                    Trending
                  </CategoryButton>
                </li>
              </Link>
              <Link to="/gaming" className="link">
                <li>
                  <CategoryButton
                    isActive={category === 'GAMING'}
                    type="button"
                    darkMode={darkMode}
                    onClick={onClickGaming}
                  >
                    <FaGamepad
                      className={category === 'GAMING' ? 'active-icon' : 'icon'}
                    />
                    Gaming
                  </CategoryButton>
                </li>
              </Link>
              <Link to="/saved-videos" className="link">
                <li>
                  <CategoryButton
                    type="button"
                    isActive={category === 'SAVED'}
                    darkMode={darkMode}
                    onClick={onClickSaved}
                  >
                    <RiMenuAddLine
                      className={category === 'SAVED' ? 'active-icon' : 'icon'}
                    />
                    Saved videos
                  </CategoryButton>
                </li>
              </Link>
            </CategoryButtonsContainer>
          </div>
          <ContactContainer darkMode={darkMode}>
            <ContactHeading>CONTACT US</ContactHeading>
            <ContactItemsContainer>
              <li>
                <ContactIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </li>
              <li>
                <ContactIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </li>
              <li>
                <ContactIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </li>
            </ContactItemsContainer>
            <ContactUsDescription>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactContainer>
        </CategorySection>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default CategoryContainer
