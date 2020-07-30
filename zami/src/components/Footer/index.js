import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';

class Footer extends Component {
    render() {
        return (
            <Navbar sticky="bottom">
                <p>2020 Copyright SixtyFifthSt Media</p>
            </Navbar> 
        )
    }
}

export default Footer;