import React, { Component } from 'react'
import Unmounting from './Unmounting'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            number: true
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render() {
        return (
            <div>
                {this.state.number === true && <Unmounting />}
                <button onClick={() => this.setState({ number: !this.state.number })}>Chnage Data</button>
            </div>
        )
    }
}
export default Main
