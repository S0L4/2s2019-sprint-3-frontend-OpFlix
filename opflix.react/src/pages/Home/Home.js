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

    constructor() {
        super();
        this.state = {
            data: [],
            idTipoLancamentoNavigation: []
        }
    }

    deslogar() {
        localStorage.removeItem('token')
    }

    componentDidMount() {
        this.listarLancamentos();
        this.listarModelos();
    }
    
    listarLancamentos = () => {
        fetch('http://localhost:5000/api/lancamentos') 
        .then(response => response.json())
        .then(response => {
            this.setState({data: response})
            console.log(response);
        })
    }

    listarModelos = () => {
        Axios.get('http://localhost:5000/api/tiposlancamento', {
            method: 'GET',
        })
            .then(response => {
                this.setState({ idTipoLancamentoNavigation: response.data })
            })
            .catch(erro => console.log(erro))
    }

    render() {
        return (
            <body className='paginaCliente'>

                <header classname='nav'>
                    <nav className='navBar'>
                        <img src={logo}></img>
                        <img src={opflixNome}></img>

                        <ul>
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
                        <div className='container'>
                            {this.state.data.map(element => (
                                <div className='item'>
                                    <img src={element.imagem} width="144px"></img>
                                    <h3>{element.titulo}</h3>    
                                </div>                          
                            ))}
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