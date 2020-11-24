import React, { Component } from 'react'

class Test extends Component {
    componentDidMount() {
        // this is the second most popular lifecycle.
        //  ehat is written here is fired off after the component mount
        console.log("componentDidMount...")
        // here we make our http request to an API or backend or fetching date from within of your component and putting it into your component state or where ever we call it.
    }
    componentWillMount() {
        console.log("componentWillMount...")
        // this runs before the componentDidMount
    }

    render() {
        return (
            <div>
                <h1>This is a test component</h1>
            </div>
        )
    }
}

export default Test;