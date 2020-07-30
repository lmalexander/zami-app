import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Cover from "../Cover";

class Jumbo extends Component {
    render() {
        return(
            <Jumbotron>
                <Cover />
                <h1>ZAMI: A NEW ETHICS OF OUR DATA</h1>
                <h2>"Zami, a Carriacou name for women who work together as friends and lovers..."</h2>
                <h4>Zami, an erotic womanist ethics of data aggregation</h4>
            </Jumbotron>
        )
    }
}

export default Jumbo;