import React, {Component} from 'react';

class ErrorBoundry extends Component{

    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        console.log(error);
        this.setState({hasError: true})
    }

    render(){
        const {hasError} = this.state;
        return hasError ? <h1>OOH NO WE HAVE A ERROR</h1> :
            this.props.children;
        
    }
}
export default ErrorBoundry;