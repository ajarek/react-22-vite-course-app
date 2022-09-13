import React from 'react'
import jwt_decode from 'jwt-decode'
import { FullPageLoader } from './components/FullPageLoader/FullPageLoader'
import { FullPageMessage } from './components/FullPageMessage/FullPageMessage'
import { FullPageLayout } from './components/FullPageLayout/FullPageLayout'
import { LoginForm } from './components/LoginForm/LoginForm'
import { CreateAccountForm } from './components/CreateAccountForm/CreateAccountForm'
import { RecoverPasswordForm } from './components/RecoverPasswordForm/RecoverPasswordForm'
import { signIn } from './auth/signIn'
import { signUp } from './auth/signUp'
import { checkIfUserIsLoggedIn } from './auth/checkIfUserIsLoggedIn'
import { sendPasswordResetEmail } from './auth/sendPasswordResetEmail'
import { BoardCourses } from './components/BoardCourses/BoardCourses'

export class App extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    isInfoDisplayed: false,
    infoMessage: 'Info message',
    errorMessage: 'Error message',
    notLoginUserRoute: 'LOGIN', //"CREATE-ACCOUNT" "LOGIN" "RECOVER-PASSWORD"
    loginPassword: '',
    loginEmail: '',
    createAccountEmail: '',
    createAccountPassword: '',
    createAccountRepeatPassword: '',
    recoverPasswordEmail: '',
    // user/auth state
    isUserLoggedIn: false,
    userDisplayName: '',
    userEmail: '',
    userAvatar: '',
    contentList: false,
    // recover password page
    recoverPasswordEmail: '',
    recoverPasswordSubmitted: false,
    //validate
    validatePassword: false,
    validateInfoPassword: '',
    validateEmail: false,
    validateInfo: '',
    validatePasswordCreate: false,
    validateInfoPasswordCreate: '',
    validateEmailCreate: false,
    validateInfoCreate: '',
    validatePasswordCreateRepeat: false,
    validateInfoPasswordCreateRepeat: '',
    validatePasswordDifferent: '',
    validateEmailForgot: false,
    validateInfoForgot: '',
  }

  componentDidMount() {
    if (checkIfUserIsLoggedIn()) {
      this.setState(() => ({ isLoading: true }))
      checkIfUserIsLoggedIn()
        .then(res => {
          if (res.error) {
            console.log(res.error.message)
          } else {
            const token = localStorage.getItem('ID_TOKEN_KEY')
            if (token) {
              this.setState(() => ({ isUserLoggedIn: true }))
              const user = jwt_decode(token)
              this.setState({ userEmail: user.email })
            }
          }
        })
        .finally(() => {
          this.setState(() => ({ isLoading: false }))
        })
    } else {
      this.setState(() => ({ isUserLoggedIn: false }))
    }
  }

  onClickLogin = () => {
    this.setState(() => ({ isLoading: true }))
    signIn(this.state.loginEmail, this.state.loginPassword)
      .then(data => {
        const newToken = data.idToken
        const newRefreshToken = data.refreshToken
        localStorage.setItem('ID_TOKEN_KEY', newToken)
        localStorage.setItem('REFRESH_TOKEN_KEY', newRefreshToken)
        this.setState({ isUserLoggedIn: true })
        this.setState({ userEmail: data.email })
        if (data.error) {
          this.setState(() => ({
            hasError: true,
            errorMessage: data.error.message,
            isUserLoggedIn: false,
          }))
        }
      })
      .finally(() => {
        this.setState(() => ({ isLoading: false }))
        this.setState({ loginEmail: '' })
        this.setState({ loginPassword: '' })
      })
  }

  onClickCreateAccount = () => {
    this.setState(() => ({ isLoading: true }))
    if (
      this.state.createAccountPassword ===
      this.state.createAccountRepeatPassword
    ) {
      this.setState(() => ({ validatePasswordDifferent: '' }))
      signUp(this.state.createAccountEmail, this.state.createAccountPassword)
        .then(data => {
          this.setState({ notLoginUserRoute: 'LOGIN' })
          if (data.error) {
            this.setState(() => ({
              hasError: true,
              errorMessage: data.error.message,
              notLoginUserRoute: 'CREATE-ACCOUNT',
            }))
          }
        })
        .finally(() => {
          this.setState(() => ({ isLoading: false }))
        })
    } else {
      this.setState(() => ({
        validatePasswordDifferent: 'passwords are different',
      }))
      this.setState(() => ({ isLoading: false }))
    }
  }

  onClickRecover = () => {
    this.setState(() => ({ recoverPasswordSubmitted: true }))
    this.setState(() => ({ isLoading: true }))
    sendPasswordResetEmail(this.state.recoverPasswordEmail)
      .then(data => {
        this.setState(() => ({
          isInfoDisplayed: true,
          infoMessage: 'Check your inbox!',
        }))
        if (data.error) {
          this.setState(() => ({
            isInfoDisplayed: false,
            hasError: true,
            errorMessage: data.error.message,
            notLoginUserRoute: 'RECOVER-PASSWORD',
          }))
        }
      })
      .finally(() => {
        this.setState(() => ({
          isLoading: false,
          notLoginUserRoute: 'LOGIN',
        }))
      })
  }
  toggleList = e => {
      this.setState({ contentList:!this.state.contentList })
  }

  onClickLogOut = () => {
    localStorage.removeItem('REFRESH_TOKEN_KEY')
    localStorage.removeItem('ID_TOKEN_KEY')
    this.setState(() => ({
      contentList:false,
      isUserLoggedIn: false,
      userDisplayName: '',
      userEmail: '',
      userAvatar: '',
      statusContentList: false,
    }))
  }
  render() {
    return (
      <div className="App">
        {this.state.isUserLoggedIn ? (
          <BoardCourses
            src={this.state.userAvatar}
            email={this.state.userEmail}
            nameUser={this.state.userDisplayName || '--'}
            contentList={this.state.contentList}
            onClick={this.toggleList}
            onClickBackToLogin={this.onClickLogOut}
          />
        ) : null}
        {this.state.notLoginUserRoute === 'LOGIN' ? (
          <FullPageLayout>
            <LoginForm
              validateInfo={this.state.validateInfo}
              validateEmail={this.state.validateEmail}
              validateInfoPassword={this.state.validateInfoPassword}
              validatePassword={this.state.validatePassword}
              email={this.state.loginEmail}
              password={this.state.loginPassword}
              onChangeEmail={e => {
                this.setState(() => ({ loginEmail: e.target.value }))
                setTimeout(() => {
                  this.state.loginEmail.match(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  )
                    ? this.setState({
                        validateEmail: true,
                        validateInfo: '',
                      })
                    : this.setState({
                        validateEmail: false,
                        validateInfo: 'invalid e-mail',
                      })
                }, 0)
              }}
              onChangePassword={e => {
                this.setState(() => ({ loginPassword: e.target.value }))
                setTimeout(() => {
                  this.state.loginPassword.match(/(?=.{6,})/)
                    ? this.setState({
                        validatePassword: true,
                        validateInfoPassword: '',
                      })
                    : this.setState({
                        validatePassword: false,
                        validateInfoPassword:
                          'password must be 6 characters or longer',
                      })
                }, 0)
              }}
              onClickLogin={this.onClickLogin}
              onClickCreateAccount={() =>
                this.setState({ notLoginUserRoute: 'CREATE-ACCOUNT' })
              }
              onClickForgotPassword={() =>
                this.setState({ notLoginUserRoute: 'RECOVER-PASSWORD' })
              }
            />
          </FullPageLayout>
        ) : this.state.notLoginUserRoute === 'CREATE-ACCOUNT' ? (
          <FullPageLayout>
            <CreateAccountForm
              validateInfoCreate={this.state.validateInfoCreate}
              validateEmailCreate={this.state.validateEmailCreate}
              validateInfoPasswordCreate={this.state.validateInfoPasswordCreate}
              validatePasswordCreate={this.state.validatePasswordCreate}
              validatePasswordCreateRepeat={
                this.state.validatePasswordCreateRepeat
              }
              validateInfoPasswordCreateRepeat={
                this.state.validateInfoPasswordCreateRepeat
              }
              email={this.state.createAccountEmail}
              password={this.state.createAccountPassword}
              repeatPassword={this.state.createAccountRepeatPassword}
              onChangeEmail={e => {
                this.setState(() => ({ createAccountEmail: e.target.value }))
                setTimeout(() => {
                  this.state.createAccountEmail.match(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  )
                    ? this.setState({
                        validateEmailCreate: true,
                        validateInfoCreate: '',
                      })
                    : this.setState({
                        validateEmailCreate: false,
                        validateInfoCreate: 'invalid e-mail',
                      })
                }, 0)
              }}
              onChangePassword={e => {
                this.setState(() => ({ createAccountPassword: e.target.value }))
                setTimeout(() => {
                  this.state.createAccountPassword.match(/(?=.{6,})/)
                    ? this.setState({
                        validatePasswordCreate: true,
                        validateInfoPasswordCreate: '',
                      })
                    : this.setState({
                        validatePasswordCreate: false,
                        validateInfoPasswordCreate:
                          'password must be 6 characters or longer',
                      })
                }, 0)
              }}
              onChangeRepeatPassword={e => {
                this.setState(() => ({
                  createAccountRepeatPassword: e.target.value,
                }))
                setTimeout(() => {
                  this.state.createAccountRepeatPassword.match(/(?=.{6,})/)
                    ? this.setState({
                        validatePasswordCreateRepeat: true,
                        validateInfoPasswordCreateRepeat: '',
                      })
                    : this.setState({
                        validatePasswordCreateRepeat: false,
                        validateInfoPasswordCreateRepeat:
                          'password must be 6 characters or longer',
                      })
                }, 0)
              }}
              validatePasswordDifferent={this.state.validatePasswordDifferent}
              onClickCreateAccount={this.onClickCreateAccount}
              onClickBackToLogin={() =>
                this.setState({ notLoginUserRoute: 'LOGIN' })
              }
            />
          </FullPageLayout>
        ) : this.state.notLoginUserRoute === 'RECOVER-PASSWORD' ? (
          <FullPageLayout>
            <RecoverPasswordForm
              email={this.state.recoverPasswordEmail}
              validateEmailForgot={this.state.validateEmailForgot}
              validateInfoForgot={this.state.validateInfoForgot}
              onChangeEmail={e => {
                this.setState(() => ({ recoverPasswordEmail: e.target.value }))
                this.setState(() => ({ recoverPasswordEmail: e.target.value }))
                setTimeout(() => {
                  this.state.recoverPasswordEmail.match(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  )
                    ? this.setState({
                        validateEmailForgot: true,
                        validateInfoForgot: '',
                      })
                    : this.setState({
                        validateEmailForgot: false,
                        validateInfoForgot: 'invalid e-mail',
                      })
                }, 0)
              }}
              onClickRecover={this.onClickRecover}
              onClickBackToLogin={() =>
                this.setState({ notLoginUserRoute: 'LOGIN' })
              }
            />
          </FullPageLayout>
        ) : null}
        {this.state.isLoading ? <FullPageLoader /> : null}

        {this.state.isInfoDisplayed ? (
          <FullPageMessage
            message={this.state.infoMessage}
            iconVariant={'info'}
            onButtonClick={() => this.setState({ isInfoDisplayed: false })}
          />
        ) : null}
        {this.state.hasError ? (
          <FullPageMessage
            message={this.state.errorMessage}
            iconVariant={'error'}
            onButtonClick={() => this.setState({ hasError: false })}
          />
        ) : null}
      </div>
    )
  }
}
export default App
