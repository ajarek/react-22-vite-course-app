import React from "react"
import "./App.css"
import { FullPageLoader } from "./components/FullPageLoader/FullPageLoader"

export class App extends React.Component {
  state = {
    isLoading: false,
  }
  render() {
    return (
    <div 
    className="App"
    >
      <h1>Kurs Javascript</h1>
      {this.state.isLoading?
      <FullPageLoader/>
      :null
  }
    </div>)
  }
}
export default App
