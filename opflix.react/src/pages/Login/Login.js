import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';

// imagens
import opflixNome from '../../assets/img/OpFlix.nome.png';

// estilo
import '../../assets/css/login.css'

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            erro: "",
        }
    }

    setarEstadoEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    setarEstadoSenha = (event) => {
        this.setState({ senha: event.target.value })
    }

    fazerLogin = (event) => {
        event.preventDefault();

        Axios.post('http://localhost:5000/api/usuarios/login', {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(data => {
                if (data.status === 200) {
                    localStorage.setItem('token', data.data.token);
                    this.props.history.push('/administrador')
                } else {
                    console.log('Algo de errado não esta certo')
                }
            })
            .catch(erro => {
                this.setState({ erro: 'Email ou senha ivalido.' })
                console.log(erro)
            })
    }

    render() {
        return (
            <section className='container'>

                <div className='paginaLogin' >

                    <div className='titulo'>
                        <img src={opflixNome} />
                    </div>

                    <div className='formLogin'>
                        <form onSubmit={this.fazerLogin}>
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
                                <button className='botao'>Login </button>
                            </div>

                            <p
                                className="textLogin"
                                style={{ color: "white", textAlign: "center" }}
                            >
                                {this.state.erro}
                            </p>
                        </form>

                        <div className='giovanna'>
                            <p>Esqueceu a sua senha?</p>
                            <Link className=' giovanna2' to='/cadastro'>Não possui uma conta?</Link>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}