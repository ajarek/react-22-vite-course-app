import React from "react"
import "./App.css"
import { FullPageLoader } from "./components/FullPageLoader/FullPageLoader"
import {Typography} from "./components/Typography/Typography"
import {Button} from "./components/Button/Button"
import {FullPageMessage} from "./components/FullPageMessage/FullPageMessage"
export class App extends React.Component {
  state = {
    isLoading: false,
    hasError:false,
    isInfoDisplayed: false,
    infoMessage: 'Info message',
    errorMessage:'Error message'
  }
  render() {
    return (
      <div className="App">
        <h1>Kurs Javascript</h1>
        {this.state.isLoading ? <FullPageLoader /> : null}
        <Typography
          className={'h1'}
        >
          Header1
        </Typography>
        
        <Typography
          className={'h3'}
        >
          Header3
        </Typography>
        <Typography
          className={'button'}
        >
          button
        </Typography>
        <br />
        <Button
        className={'root contained secondary'}
        >
          Button
        </Button>
        <br />
        <Button
        className={'root contained primary'}
        >
          Button
        </Button>
        <br />
        <Button
        className={'root text'}
        >
          Button
        </Button>
        {
          this.state.isInfoDisplayed ?
        <FullPageMessage
        message={ this.state.infoMessage}
        iconVariant={'info'}
        onButtonClick={console.log}
        />
        :null
  }
   {
          this.state.hasError ?
            <FullPageMessage
              message={this.state.errorMessage}
              iconVariant={'error'}
              onButtonClick={console.log}
            />
            :
            null
        }
      </div>
    )
  }
}
export default App
