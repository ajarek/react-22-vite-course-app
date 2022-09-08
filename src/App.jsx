import React from 'react'
import { FullPageLoader } from './components/FullPageLoader/FullPageLoader'
import { FullPageMessage } from './components/FullPageMessage/FullPageMessage'
import { FullPageLayout } from './components/FullPageLayout/FullPageLayout'
import { LoginForm } from './components/LoginForm/LoginForm'
import { CreateAccountForm } from './components/CreateAccountForm/CreateAccountForm'
import { RecoverPasswordForm } from './components/RecoverPasswordForm/RecoverPasswordForm'
import { signIn } from './auth/signIn'
import { signUp } from './auth/signUp'
import { sendPasswordResetEmail } from './auth/sendPasswordResetEmail'

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
    // recover password page
    recoverPasswordEmail: '',
    recoverPasswordSubmitted: false,
    //validate
    validateEmail: false,
    validateInfo:'',
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
      alert('passwords are different')
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

  render() {
    return (
      <div className="App">
        {this.state.isUserLoggedIn ? (
          <div
            style={{
              zIndex: '1000000',
              position: 'absolute',
              top: '0',
              left: '10%',
            }}>
            <p>Welcome {this.state.userEmail}</p>
          </div>
        ) : null}
        {this.state.notLoginUserRoute === 'LOGIN' ? (
          <FullPageLayout>
            <LoginForm
              email={this.state.loginEmail}
              password={this.state.loginPassword}
              onChangeEmail={e =>{
                
                this.setState(() => ({ loginEmail: e.target.value }))
                setTimeout(() => {
                  this.state.loginEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?this.setState({
                  validateEmail: true,
                  validateInfo:'email ok',
                }):this.setState({
                  validateEmail: false,
                  validateInfo:'email false',
                })
              },0)
              }
            }
              onChangePassword={e =>
                this.setState(() => ({ loginPassword: e.target.value }))
              }
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
              email={this.state.createAccountEmail}
              password={this.state.createAccountPassword}
              repeatPassword={this.state.createAccountRepeatPassword}
              onChangeEmail={e =>
                this.setState(() => ({ createAccountEmail: e.target.value }))
              }
              onChangePassword={e =>
                this.setState(() => ({ createAccountPassword: e.target.value }))
              }
              onChangeRepeatPassword={e =>
                this.setState(() => ({
                  createAccountRepeatPassword: e.target.value,
                }))
              }
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
              onChangeEmail={e =>
                this.setState(() => ({ recoverPasswordEmail: e.target.value }))
              }
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
