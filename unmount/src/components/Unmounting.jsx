import React, { Component } from 'react'

class Unmounting extends Component {
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        return (
            <div>
                <h1>Unmounting Component</h1>
            </div>
        )
    }
}
export default Unmounting