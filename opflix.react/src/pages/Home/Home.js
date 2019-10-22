import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';

// componentes
import Rodape from '../../components/Rodape'
import Titulo from '../../components/Titulo'

// imagens 
import logo from '../../assets/img/OpFlix.logo.red.png'
import opflixNome from '../../assets/img/OpFlix.nome.png'
import fundoHist from '../../assets/img/OpFlix.banner.jpg'

// estilo
import '../../assets/css/home.css'

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
                this.setState({ data: response })
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

                <div className='lancamento'>
                    <Titulo titulo='Lançamentos' />

                    <div className='container'>
                        {this.state.data.map(element => (
                            <div className='item'>
                                <img src={element.imagem} width="144px"></img>
                                <h3>{element.titulo}</h3>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='historia'>
                    <Titulo titulo='Historia' />

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