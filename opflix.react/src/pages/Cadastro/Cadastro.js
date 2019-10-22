import React, { Component } from 'react';
import Axios from 'axios';

// imagens
import opflixNome from '../../assets/img/OpFlix.nome.png'

// estilo
import '../../assets/css/cadastro.css'

export default class Cadastro extends Component {

    // clip-path: polygon(63% 0, 100% 0%, 100% 100%, 11% 100%);

    constructor() {
        super();
        this.state = {
            nome: "",
            email: "",
            senha: "",
            idTIpoUsuario: "",
            erro: ""
        }
    }

    setarEstadoNome = (event) => {
        this.setState({nome: event.target.value})
    }

    setarEstadoEmail = (event) => {
        this.setState({email: event.target.value})
    }

    setarEstadoSenha = (event) => {
        this.setState({senha: event.target.value})
    }

    setarEstadoTipoUsuario = (event) => {
        this.setState({idTIpoUsuario: event.target.value})
    }

    cadastrarUsuario = (event) => {
        event.preventDefault();

        Axios.post('http://localhost:5000/api/usuarios', {
            // headers: {
            //     'Authorization': 'Bearer ' + localStorage.getItem('token')
            // },          

            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            idTIpoUsuario: 2
        })           
        .catch(erro => {
            this.setState({erro: 'Ocorreu algum prolema. Por favor insira as suas informações de novo.'})
            console.log(this.state)
        })
    }

    render() {  
        return (
            <section className='container'>

                <div className='paginaCadastro'>

                    <div className='titulo'>
                        <img src={opflixNome} />
                    </div>

                    <div className='formCadastro'>
                        <form onSubmit={this.cadastrarUsuario}>
                            <div className='item'>
                                <input className='input'
                                    placeholder='Nome'
                                    type='text'
                                    onChange={this.setarEstadoNome}
                                    value={this.state.nome}
                                />
                            </div>

                            <div className='item'>
                                <input className='input'
                                    placeholder='Email'
                                    type='text'
                                    onChange={this.setarEstadoEmail}
                                    value={this.state.email}
                                />
                            </div>

                            <div className='item'>
                                <input className='input' 
                                    placeholder='Senha'
                                    type='password'
                                    onChange={this.setarEstadoSenha}
                                    value={this.state.senha}                                    
                                />
                            </div>

                            <div className='loginButton'>
                                <button className='button'>Cadastrar </button>
                            </div>

                            <p 
                                className="text__login"
                                style={{color: "red", textAlign: "center"}}
                            >   
                                {this.state.erro}
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}