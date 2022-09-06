import React from "react"
import { FullPageLoader } from "./components/FullPageLoader/FullPageLoader"
import { FullPageMessage } from "./components/FullPageMessage/FullPageMessage"
import { FullPageLayout } from "./components/FullPageLayout/FullPageLayout"
import { LoginForm } from "./components/LoginForm/LoginForm"
import { CreateAccountForm } from "./components/CreateAccountForm/CreateAccountForm"
import { RecoverPasswordForm } from "./components/RecoverPasswordForm/RecoverPasswordForm"
import { signIn } from "./auth/signIn"
export class App extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    isInfoDisplayed: false,
    infoMessage: "Info message",
    errorMessage: "Error message",
    notLoginUserRoute: "LOGIN", //"CREATE-ACCOUNT" "LOGIN" "RECOVER-PASSWORD"
    loginPassword: "",
    loginEmail: "",
    createAccountEmail: "",
    createAccountPassword: "",
    createAccountRepeatPassword: "",
    recoverPasswordEmail: "",
    // user/auth state
    isUserLoggedIn: false,
    userDisplayName: '',
    userEmail: '',
    userAvatar: '',
  }
  onClickLogin=()=>{
    this.setState(() => ({ isLoading: true }))
    
       signIn(this.state.loginEmail, this.state.loginPassword)
       
      .then(data => {
        const newToken=data.idToken
        const newRefreshToken=data.refreshToken
        localStorage.setItem('ID_TOKEN_KEY', newToken)
        localStorage.setItem('REFRESH_TOKEN_KEY', newRefreshToken)
        this.setState({ userDisplayName:data.displayName})
        this.setState({ userEmail:data.email})
        this.setState({ userAvatar:data.profilePicture})
        if(data.error)  {
          this.setState(() => ({
            hasError: true,
            errorMessage: data.error.message
          }))
        }
      })
     
     .finally(()=> {
      this.setState(() => ({ isLoading: false }))
      this.setState({loginEmail:''})
      this.setState({loginPassword:''})
      this.setState({isUserLoggedIn:true})
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.isUserLoggedIn?
        <div
        style={{zIndex:'1000000',position:'absolute',top:'0',left:'0'}}
        >
          <img src={this.state.userAvatar} alt="" />
          <p>{this.state.userDisplayName}</p>
        </div>:
        null
          }
        {this.state.notLoginUserRoute === "LOGIN" ? (
          <FullPageLayout>
            <LoginForm
              email={this.state.loginEmail}
              password={this.state.loginPassword}
              onChangeEmail={(e) =>
                this.setState(() => ({ loginEmail: e.target.value }))
              }
              onChangePassword={(e) =>
                this.setState(() => ({ loginPassword: e.target.value }))
              }
              onClickLogin={this.onClickLogin}
              onClickCreateAccount={() => this.setState({notLoginUserRoute:"CREATE-ACCOUNT"})}
              onClickForgotPassword={() => this.setState({notLoginUserRoute:"RECOVER-PASSWORD"})}
            />
          </FullPageLayout>
        ) : this.state.notLoginUserRoute === "CREATE-ACCOUNT" ? (
          <FullPageLayout>
            <CreateAccountForm
              email={this.state.createAccountEmail}
              password={this.state.createAccountPassword}
              repeatPassword={this.state.createAccountRepeatPassword}
              onChangeEmail={(e) =>
                this.setState(() => ({ createAccountEmail: e.target.value }))
              }
              onChangePassword={(e) =>
                this.setState(() => ({ createAccountPassword: e.target.value }))
              }
              onChangeRepeatPassword={(e) =>
                this.setState(() => ({
                  createAccountRepeatPassword: e.target.value,
                }))
              }
              onClickCreateAccount={() => console.log("onClickCreateAccount")}
              onClickBackToLogin={() => this.setState({notLoginUserRoute:"LOGIN"})}
            />
          </FullPageLayout>
        ) : this.state.notLoginUserRoute === "RECOVER-PASSWORD" ? (
          <FullPageLayout>
            <RecoverPasswordForm
              email={this.state.recoverPasswordEmail}
              onChangeEmail={(e) =>
                this.setState(() => ({ recoverPasswordEmail: e.target.value }))
              }
              onClickRecover={() => console.log("onClickRecover")}
              onClickBackToLogin={() => this.setState({notLoginUserRoute:"LOGIN"})}
            />
          </FullPageLayout>
        ) : null}
        {this.state.isLoading ? <FullPageLoader /> : null}

        {this.state.isInfoDisplayed ? (
          <FullPageMessage
            message={this.state.infoMessage}
            iconVariant={"info"}
            onButtonClick={() => this.setState({isInfoDisplayed:false})}
          />
        ) : null}
        {this.state.hasError ? (
          <FullPageMessage
            message={this.state.errorMessage}
            iconVariant={"error"}
            onButtonClick={() => this.setState({hasError:false})}
          />
        ) : null}
      </div>
    )
  }
}
export default App
