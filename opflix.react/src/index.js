import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// paginas
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Administrador from './pages/Administrador/Administrador';
import Contato from './pages/Contato/Contato';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';
import {parseJwt} from './services/auth';

// rotas
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

const RotaPrivada = ({component: Component}) => (
    <Route
        render={props =>
            parseJwt().TipoUsuario === 'Administrador' ?
            (
                <Component {...props}/>
            ) : (
                <Redirect 
                    to={{pathname: '/home', state: {from: props.location}}}
                />
            )
        }
    />
)

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/home' component={Home}/>
                <Route path='/contato' component={Contato}/>
                <RotaPrivada path='/administrador' component={Administrador}/>
                <Route component={NaoEncontrado}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(rotas , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
