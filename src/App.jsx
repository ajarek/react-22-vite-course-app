import React from "react"
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
          variant={'h1'}
        >
          Header1
        </Typography>
        
        <Typography
          variant={'h3'}
        >
          Header3
        </Typography>
        <Typography
          variant={'button'}
        >
          button
        </Typography>
        <br />
        <Button       
          variant={'contained'}
          color={'primary'}
        >
           <Typography
          variant={'button'}
        >
          Button
        </Typography>
        </Button>
        <br />
        <Button
       variant={'contained'}
       color={'secondary'}
        >
           <Typography
          variant={'button'}
        >
          Button
        </Typography>
        </Button>
        <br />
        <Button
        variant={'text'}
        
        >
         <Typography
          variant={'button'}
        >
          Button
        </Typography>
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
