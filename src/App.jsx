import React from "react"
import { FullPageLoader } from "./components/FullPageLoader/FullPageLoader"
import { FullPageMessage } from "./components/FullPageMessage/FullPageMessage"
import { FullPageLayout } from "./components/FullPageLayout/FullPageLayout"
import { LoginForm } from "./components/LoginForm/LoginForm"
import { CreateAccountForm } from "./components/CreateAccountForm/CreateAccountForm"
import { RecoverPasswordForm } from "./components/RecoverPasswordForm/RecoverPasswordForm"
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
  }
  render() {
    return (
      <div className="App">
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
              onClickLogin={() => console.log("onClickLogin")}
              onClickCreateAccount={() => console.log("onClickCreateAccount")}
              onClickForgotPassword={() => console.log("onClickForgotPassword")}
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
              onClickBackToLogin={() => console.log("onClickBackToLogin")}
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
              onClickBackToLogin={() => console.log("onClickBackToLogin")}
            />
          </FullPageLayout>
        ) : null}
        {this.state.isLoading ? <FullPageLoader /> : null}

        {this.state.isInfoDisplayed ? (
          <FullPageMessage
            message={this.state.infoMessage}
            iconVariant={"info"}
            onButtonClick={console.log}
          />
        ) : null}
        {this.state.hasError ? (
          <FullPageMessage
            message={this.state.errorMessage}
            iconVariant={"error"}
            onButtonClick={console.log}
          />
        ) : null}
      </div>
    )
  }
}
export default App
