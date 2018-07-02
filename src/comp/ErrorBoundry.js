import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(erroe, info) {
        this.setstate({ hasError: true})
    }
    render() {
        if (this.state.hasError) {
            return <h1>Oooops. This shuld not happen</h1>
        }
        return this.props.children 
    }

}

export default ErrorBoundry;