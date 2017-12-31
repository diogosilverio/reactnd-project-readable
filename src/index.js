import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './assets/css/navbar-top.css';
import './assets/css/leitura.css';

import './bootstrap-assets';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/ui/Navbar';

import Index from './components/Index';
import Categoria from './components/Categoria';
import Post from './components/Post';
import Novo from './components/Novo';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div className="app">
            <Navbar />
            <Route exact path="/" component={Index} />
            <Route path="/novo" component={Novo} />
            <Route exact path="/posts/:id" component={Post} />
            <Route path="/posts/:id/edit" component={Novo} />
            <Route path="/categoria/:name" component={Categoria} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
