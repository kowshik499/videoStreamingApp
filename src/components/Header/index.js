import {Link, withRouter} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import NxtWatchContext from '../NxtWatchContext'
import {
  NavBarContainer,
  Logo,
  ItemsList,
  ListItem,
  Profile,
  LogoutButton,
  PopupContainer,
  PopupBtnsContainer,
  PopupText,
  ConfirmBtn,
  CancelBtn,
  ThemeButton,
} from './styledComponents'
import './index.css'

const Header = props => {
  const {history} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode, changeCategory, changeDarkMode} = value
        const changeMode = () => {
          changeDarkMode()
        }
        const overlayStyle = {
          backgroundColor: darkMode ? '#00000032' : '#ffffff32',
        }
        const navigateToHome = () => {
          changeCategory('HOME')
        }

        const onClickLogout = () => {
          Cookies.remove('jwt_token')
          changeCategory('HOME')
          history.replace('/login')
        }

        return (
          <nav>
            <NavBarContainer darkMode={darkMode}>
              <Link to="/">
                {darkMode ? (
                  <Logo
                    onClick={navigateToHome}
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}
              </Link>
              <ItemsList>
                <ListItem onClick={changeMode}>
                  <ThemeButton
                    darkMode={darkMode}
                    type="button"
                    data-testid="theme"
                  >
                    {darkMode ? (
                      <FiSun className="light-mode-icon" />
                    ) : (
                      <BsMoon className="dark-mode-icon" />
                    )}
                  </ThemeButton>
                </ListItem>
                <ListItem>
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ListItem>
                <li className="logout-button-container">
                  <Popup
                    modal
                    trigger={<LogoutButton type="button">Logout</LogoutButton>}
                    overlayStyle={overlayStyle}
                  >
                    {close => (
                      <>
                        <PopupContainer darkMode={darkMode}>
                          <PopupText darkMode={darkMode}>
                            Are you sure, you want to logout
                          </PopupText>
                          <PopupBtnsContainer>
                            <CancelBtn
                              darkMode={darkMode}
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </CancelBtn>
                            <ConfirmBtn type="button" onClick={onClickLogout}>
                              Confirm
                            </ConfirmBtn>
                          </PopupBtnsContainer>
                        </PopupContainer>
                      </>
                    )}
                  </Popup>
                </li>
              </ItemsList>
            </NavBarContainer>
          </nav>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
