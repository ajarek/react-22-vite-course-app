import React from "react"
import "./App.css"
import { FullPageLoader } from "./components/FullPageLoader/FullPageLoader"
import {Typography} from "./components/Typography/Typography"
import {Button} from "./components/Button/Button"
import {FullPageMassage} from "./components/FullPageMessage/FullPageMassage"
export class App extends React.Component {
  state = {
    isLoading: false,
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
        <FullPageMassage/>
      </div>
    )
  }
}
export default App
