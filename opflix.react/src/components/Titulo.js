import React, { Component } from 'react';

// estilo
import '../assets/css/titulo.css'
export default class Titulo extends Component {
    render() {
        return (
            <h1 className='tituloPrincipal'>{this.props.titulo}</h1>
            );
    }
}