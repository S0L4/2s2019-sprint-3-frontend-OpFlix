import React, { Component } from 'react';

export default class Titulo extends Component {
    render() {
        return (
            <h1 className='tituloPrincipal'>{this.props.titulo}</h1>
        );
    }
}