import React, { Component } from 'react'

export default class ErrorBoundries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }
    static getDerivedStateFromError(err) {
        console.log(err)
        return { error: true }
    }
    render() {
        if (!this.state.error) {
            return this.props.children
        }
        else {
            return <h1>Sagar Bhai Is vadil</h1>
        }
    }
}
