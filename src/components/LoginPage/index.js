import {Component} from 'react'
import Cookies from 'js-cookie'
import NxtWatchContext from '../NxtWatchContext'
import {
  LoginPageAppContainer,
  LoginContainer,
  FormContainer,
  Logo,
  CheckBoxContainer,
  Label,
  ErrorText,
  UserInput,
  SubmitButton,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorText: false,
    errorMsg: '',
  }

  onRequestSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    this.setState({
      username: '',
      password: '',
      showPassword: false,
      showErrorText: false,
      errorMsg: '',
    })
    const {history} = this.props
    history.replace('/')
  }

  onRequestFailure = errorMsg => {
    this.setState({
      errorMsg,
      showErrorText: true,
    })
  }

  loginUser = async event => {
    event.preventDefault()
    this.setState({
      showErrorText: false,
      errorMsg: '',
    })
    const {username, password} = this.state
    const userData = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onRequestSuccess(data.jwt_token)
    } else this.onRequestFailure(data.error_msg)
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeCheckBox = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorText,
      errorMsg,
    } = this.state
    const {history} = this.props
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      history.replace('/')
    }
    const typeAt = showPassword ? 'text' : 'password'

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value
          const logoUrl = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginPageAppContainer darkMode={darkMode}>
              <LoginContainer darkMode={darkMode}>
                <Logo src={logoUrl} alt="website logo" />
                <FormContainer onSubmit={this.loginUser}>
                  <Label htmlFor="userName">USERNAME</Label>
                  <UserInput
                    type="text"
                    value={username}
                    onChange={this.onChangeUsername}
                    id="userName"
                  />
                  <Label htmlFor="password">PASSWORD</Label>
                  <UserInput
                    type={typeAt}
                    value={password}
                    id="password"
                    onChange={this.onChangePassword}
                  />
                  <CheckBoxContainer>
                    <input
                      id="checkBox"
                      type="checkbox"
                      checked={showPassword}
                      onChange={this.onChangeCheckBox}
                    />
                    <label htmlFor="checkBox">Show Password</label>
                  </CheckBoxContainer>
                  <SubmitButton type="submit">Login</SubmitButton>
                  {showErrorText && <ErrorText>*{errorMsg}</ErrorText>}
                </FormContainer>
              </LoginContainer>
            </LoginPageAppContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
