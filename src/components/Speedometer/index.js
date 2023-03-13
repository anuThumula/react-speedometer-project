// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => {
        console.log(`previous state value ${prevState}`)
        return {count: prevState.count + 10}
      })
    }
  }

  onApplyBreak = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => {
        console.log(`previous state value ${prevState}`)
        return {count: prevState.count - 10}
      })
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div className="img-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="img"
            alt="speedometer"
          />
        </div>
        <h2 className="speed-count-heading">Speed is {count}mph</h2>

        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-cont">
          <button className="button1" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button2" type="button" onClick={this.onApplyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
