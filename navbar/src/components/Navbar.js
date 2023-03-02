import '../styles/navbar.css';
import React, { Component } from 'react';
import { FaApple } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";




class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            clicked: false
        }
    }

    // state = {clicked: false};

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render(){
        return ( 
            
            <div id='full-page'>
                <nav>
                    <a href="#"><FaApple size="5rem" color='green'/></a>
                    <ul id='navbar' className={this.state.clicked ? "navbar active" : "navbar"}>
                        <li><a className='active' href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
        
                    </ul>
                </nav>
                <span id='mobile' onClick={this.handleClick}>{this.state.clicked ? <FaRegWindowClose size="1.2rem" color='white'/> : <FaBars size="1.2rem" color='white' />}</span>

            </div>
                
                
            
        );
    }
}

export default Navbar;