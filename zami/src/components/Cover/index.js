import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import LordeCover from "../../assets/images/lorde-and-zami-cover.png";

class Cover extends Component {
    render() {
        return (
            <Image src={LordeCover} />
        )
    }
}

export default Cover;