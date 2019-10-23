import React, { Component } from 'react';
import { Link } from "react-router-dom";

// componentes
import Rodape from '../../components/Rodape'
import Titulo from '../../components/Titulo'

// imagens 
import logo from '../../assets/img/OpFlix.logo.red.png'
import opflixNome from '../../assets/img/OpFlix.nome.png'
import facebook from '../../assets/img/OpFlix.facebook.png'
import instagram from '../../assets/img/OpFlix.instagram.png'
import twitter from '../../assets/img/OpFlix.twitter.png'

// estilo
import '../../assets/css/contato.css'

export default class Contato extends Component {
    render() {
        return (
            <body className='paginaContato'>

                <header className='nav'>
                    <nav className='navBar'>
                        <img src={logo}></img>
                        <img src={opflixNome}></img>

                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>

                        <button>
                            <Link to='/' onClick={this.deslogar}>Sair</Link>
                        </button>
                    </nav>
                </header>

                <Titulo titulo='Precisa de Ajuda?' />


                <div className='formContato'>
                    <form>
                        <p>Evie sua mensagem para melhorarmos o nosso site!</p>
                        <input className='input' placeholder='Nome' type='text'></input>
                        <input className='input' placeholder='Email' type='text' ></input>
                        <input className='input' placeholder='Mensagem' type='text' ></input>

                        <button className='button'>Enviar</button>
                    </form>
                </div>

                <div className='info'>
                    <p>Nosso email é: opflix_oficial@gmail.com</p>
                    <p>Nosso telefone é: 0800 591 2117</p>

                    <div className='redesSociais'>
                        <img src={facebook} id="face" />
                        <img src={instagram} id="insta" />
                        <img src={twitter} id="twitter" />
                    </div>
                </div>

                <Rodape />
            </body>
        );
    }
}