import React, { Component } from 'react';
import { Link } from "react-router-dom";

// componentes
import Rodape from '../../components/Rodape'
import Titulo from '../../components/Titulo'

// imagens 
import logo from '../../assets/img/OpFlix.logo.red.png'
import opflixNome from '../../assets/img/OpFlix.nome.png'
import fundoHist from '../../assets/img/OpFlix.banner.jpg'

// estilo


export default class Home extends Component {
    
    deslogar() {
        localStorage.removeItem('usuarioAdm')
    }

    render() {
        return (
            <body className='paginaCliente'>

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

                <div className='lancamento'>
                    <Titulo titulo='Lançamentos' />

                    <h2>Filmes</h2>
                    <div className='item'>
                        <div className='container'>
                            <img src=''></img>
                            <h3>Nome do filme</h3>
                        </div>
                    </div>
                    
                    <h2>Séries</h2>
                    <div className='item'>
                        <div className='container'>
                            <img src=''></img>
                            <h3>Nome da série</h3>
                        </div>
                    </div>
                </div>

                <div className='historia'>
                    <Titulo titulo='Historia' />

                    <img src={fundoHist}></img>

                    <div className='histContent'>
                        <p>Bacon ipsum dolor amet shankle spare ribs chuck burgdoggen alcatra
                    ham hock filet mignon sirloin meatloaf rump flank fatback.Kevin picanha tongue drumstick flank corned beef. Andouille boudin
                    urducken drumstick. Boudin buffalo ham hock shoulder strip steak beef bresaola.Chuck pancetta shoulder shankle brisket.
                        </p>
                    </div>
                </div>

                <Rodape />
            </body>
        );
    }
} 