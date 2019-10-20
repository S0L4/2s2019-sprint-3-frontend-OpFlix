import React, { Component } from 'react';

// componentes
import Rodape from '../../components/Rodape'
import Titulo from '../../components/Titulo'

// imagens 
import logo from '../../assets/img/OpFlix.logo.red.png'
import opflixNome from '../../assets/img/OpFlix.nome.png'
import facebook from '../../assets/img/OpFlix.facebook.png'
import instagram from '../../assets/img/OpFlix.instagram.png'
import twitter from '../../assets/img/OpFlix.twitter.png'

export default class Contato extends Component {
    render() {
        return (
            <body className='paginaContato'>

            <header classname='nav'>
                <nav className='navBar'>
                    <img src={logo}></img>
                    <img src={opflixNome}></img>

                    <ul>
                        <li><Link to='.lancamento'>Lançamentos</Link></li>
                        <li><Link to='.historia'>História</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>
                    </ul>

                    <button>
                        <Link to='/' onClick={this.deslogar}>Sair</Link>
                    </button>
                </nav>
            </header>
            
            <Titulo titulo='Precisa de Ajuda?' />
            <p>Evie sua mensagem para melhorarmos o nosso programa!</p>

            <div className='formContato'>
                <form>
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
                    <img src={facebook} id="face"/>
                    <img src={instagram} id="insta"/>
                    <img src={twitter} id="twitter"/>
                </div>
            </div>

            <Rodape />
        </body>
        );
    }
}