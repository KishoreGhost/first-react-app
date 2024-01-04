import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
      this.adder = this.adder.bind(this)
      this.minus = this.minus.bind(this)
      this.reset = this.reset.bind(this)
    }
    adder(){
        this.setState({
            count: this.state.count+1
        })
    }
    minus(){
        this.setState({
            count:this.state.count-1
        })
    }

    reset(){
        this.setState({
            count: 0
        })
    }
    
  render() {
    return (
      <div id='parent'>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button onClick={this.adder}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default ClassComponent