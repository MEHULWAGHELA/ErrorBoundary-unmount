import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log(this.props)
        if (this.props.name === 'sagar') {
            throw new Error("Sagar Bhai is vadil")
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ChildComponent
                </h1>
            </div>
        )
    }
}
