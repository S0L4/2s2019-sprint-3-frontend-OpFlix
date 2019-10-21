import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';

// componentes
import Rodape from '../../components/Rodape'
import Titulo from '../../components/Titulo'

// imagens
import logo from '../../assets/img/OpFlix.logo.red.png'
import opflixNome from '../../assets/img/OpFlix.nome.png'
import { expressionStatement } from '@babel/types';

// estilo


export default class Administrador extends Component {

    constructor() {
        super();
        this.state = {
            listaLancamento: [],
            idCategoriaNavigation: [],
            idPlataformaNavigation: [],
            idClassificacaoNavigation: [],
            idTipoLancamentoNavigation: [],

            titulo: "",
            sinopse: "",
            dataLancamento: "",
            idCategoria: "",
            idPlataforma: "",
            duracaoMin: "",
            idClassificacao: "",
            idTipoLancamento: "",
        }
    }

    deslogar() {
        localStorage.removeItem('token')
    }

    componentDidMount() {
        this.listarLancamentos();
        this.listarCategorias();
        this.listarPlataformas();
        this.listarClassificacoes();
        this.listarModelos();
    }

    listarLancamentos = () => {
        fetch('http://localhost:5000/api/lancamentos', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
            .then(x => x.json())
            .then(x => this.setState({ listaLancamento: x }))
    }

    listarCategorias = () => {
        Axios.get('http://localhost:5000/api/categorias', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
            .then(response => {
                this.setState({ idCategoriaNavigation: response.data })
            })
            .catch(erro => console.log(erro))
    }

    listarPlataformas = () => {
        Axios.get('http://localhost:5000/api/plataformas', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
            .then(response => {
                this.setState({ idPlataformaNavigation: response.data })
            })
            .catch(erro => console.log(erro))
    }

    listarClassificacoes = () => {
        Axios.get('http://localhost:5000/api/classificacoes', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
            .then(response => {
                this.setState({ idClassificacaoNavigation: response.data })
            })
            .catch(erro => console.log(erro))
    }

    listarModelos = () => {
        Axios.get('http://localhost:5000/api/tiposlancamento', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
            .then(response => {
                this.setState({ idTipoLancamentoNavigation: response.data })
            })
            .catch(erro => console.log(erro))
    }

    tituloLancamento = (event) => {
        this.setState({ titulo: event.target.value });
    }

    sinopseLancamento = (event) => {
        this.setState({ sinopse: event.target.value });
    }

    dataLancamento = (event) => {
        this.setState({ dataLancamento: event.target.value });
    }

    categoriaLancamento = (event) => {
        this.setState({ idCategoria: Number(event.target.value) });
    }

    plataformaLancamento = (event) => {
        this.setState({ idPlataforma: Number(event.target.value) });
    }

    duracaoMinLancamento = (event) => {
        this.setState({ duracaoMin: Number(event.target.value) });
    }

    classificacaoLancamento = (event) => {
        console.log(event.target.value)
        this.setState({ idClassificacao: (typeof (event.target.value) === 'number') ? Number(event.target.value) : 1 });
    }

    tipoLancamento = (event) => {
        this.setState({ idTipoLancamento: Number(event.target.value) });
    }

    cadastrarLancamento = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/api/lancamentos', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                titulo: this.state.titulo,
                sinopse: this.state.sinopse,
                dataLancamento: this.state.dataLancamento,
                idPlataforma: this.state.idPlataforma,
                idCategoria: this.state.idCategoria,
                idClassificao: this.state.idClassificacao,
                idTipoLancamento: this.state.idTipoLancamento,
                duracaoMin: this.state.duracaoMin
            }),
        })
            .then(response => response.json())
            .then(data => this.listarLancamentos())
            .catch(error => console.log(error))
    }


    render() {
        return (
            <body className='paginaAdministrador'>

                <header className='nav'>
                    <nav className='navBar'>
                        <img src={logo}></img>
                        <img src={opflixNome}></img>

                        <button>
                            <Link to='/' onClick={this.deslogar}>Sair</Link>
                        </button>
                    </nav>
                </header>

                {/* <div className='estatisticas'>
                    <div className='lancEstatisticas'>
                        {this.state.listaLancamento.map(element => {
                            <p>{element.idLancamento}</p>
                        })}
                        <h3>Lançamentos</h3>
                    </div>

                    <div className='userEstatisticas'>
                        <p>29</p>
                        <h3>Usuários</h3>
                    </div>

                    <div className='cateEstatisticas'>
                        <p>50</p>
                        <h3>Categorias</h3>
                    </div>
                </div> */}

                <div className='adm'>
                    <Titulo titulo='Administração' />

                    <div className='tabelaLançamentos'>
                        <h2>Lançamentos</h2>

                        <table className='tabelaLista'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Sinopse</th>
                                    <th>Data Lançamento</th>
                                    <th>Categoria</th>
                                    <th>Plataforma</th>
                                    <th>Duração</th>
                                    <th>Classificação</th>
                                    <th>Modelo</th>
                                </tr>
                            </thead>

                            <tbody className='tabela'>
                                {this.state.listaLancamento.map(element => {
                                    return (
                                        <tr key={element.idLancamento}>
                                            <td>{element.idLancamento}</td>
                                            <td>{element.titulo}</td>
                                            <td>{element.sinopse}</td>
                                            <td>{element.dataLancamento}</td>
                                            <td>{(element.idCategoriaNavigation === undefined) ?
                                                'categoria não registrada' : element.idCategoriaNavigation.nome}</td>
                                            <td>{(element.idPlataformaNavigation === undefined) ?
                                                'plataforma não registrada' : element.idPlataformaNavigation.nome}</td>
                                            <td>{element.duracaoMin}</td>
                                            <td>{element.idClassificaoNavigation.idade}</td>
                                            <td>{element.idTipoLancamentoNavigation.tipo}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className='cadastroLancamento'>
                        <h2>Cadastrar Lançamento</h2>
                        <form >
                            <div>
                                <h3>Titulo</h3>
                                <input className="titulo" type="text" onChange={this.tituloLancamento} value={this.state.titulo} />

                                <h3>Sinopse</h3>
                                <input className="sinopse" type="text" onChange={this.sinopseLancamento} value={this.state.sinopse} />

                                <h3>Data de lançamento</h3>
                                <input className="dataLancamento" type="dateTime" onChange={this.dataLancamento} value={this.state.dataLancamento} />

                                <h3>Gênero</h3>
                                <select className='genero' onChange={this.categoriaLancamento}>
                                    <option value='null'>Selecione</option>
                                    {this.state.idCategoriaNavigation.map(element => {
                                        return (
                                            <option value={element.idCategoria} key={element.idCategoria}>{element.nome}</option>
                                        )
                                    })}
                                </select>

                                <h3>Plataforma</h3>
                                <select className='plataforma' onChange={this.plataformaLancamento}>
                                    <option value='null'>Selecione</option>
                                    {this.state.idPlataformaNavigation.map(element => {
                                        return (
                                            <option value={element.idPlataforma} key={element.idPlataforma}>{element.nome}</option>
                                        )
                                    })}
                                </select>

                                <h3>Duração em min</h3>
                                <input className="duracao" type="number" onChange={this.duracaoMinLancamento} value={this.state.duracaoMin} />

                                <h3>Classificação</h3>
                                <select className='classificacao' onChange={this.classificacaoLancamento}>
                                    <option value='null'>Selecione</option>
                                    {this.state.idClassificacaoNavigation.map(element => {
                                        return (
                                            <option value={element.idClassificacao} key={element.idClassificacao}>{element.idade}</option>
                                        )
                                    })}
                                </select>

                                <h3>Modelo</h3>
                                <select className='modelo' onChange={this.tipoLancamento}>
                                    <option value='null'>Selecione</option>
                                    {this.state.idTipoLancamentoNavigation.map(element => {
                                        return (
                                            <option value={element.idTipoLancamento} key={element.idTipoLancamento}>{element.tipo}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <button className='botaoCadastrar' onClick={this.cadastrarLancamento}>Cadastrar</button>
                        </form>
                    </div>

                    <div className='tabelaCategorias'>
                        <h2>Gêneros</h2>

                        <table className='tabelaLista'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                </tr>
                            </thead>

                            <tbody className='tabela'>
                                {this.state.listaLancamento.map(element => {
                                    return (
                                        <tr key={element.idLancamento}>
                                            <td>{element.idLancamento}</td>
                                            <td>{element.idCategoriaNavigation.nome}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
                <Rodape />
            </body>

        );
    }
}
