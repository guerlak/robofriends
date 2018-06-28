import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component{
    render(){
        return(
            <div className='f3 tc'>
            
                <h3>{this.props.greeting}</h3>
            </div>
        ) 
    }
}

export default Hello;