import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Child from './Child';

class Button extends Component {
    render() {
        return (
            <div className='App'>
                <Link to='/child'><button  className='btn'>Click me</button></Link>
            </div>
        );
    }
}

export default Button;