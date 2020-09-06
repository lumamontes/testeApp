import React from 'react'

import './style.css'
import { Link } from 'react-router-dom'

function Home () {
    return (
       <div id="home-page">
           <div id="home-page-content" className="container">
            <header>
                <img src="" alt=""/>
                <nav>
                    <Link to="#" className="button">Entrar</Link>
                    <Link to="#" className="">Cadastre-se</Link>
                 </nav>
            </header>
        <div id="title-container">
            <h1>Você precisa fazer o teste para a Covid-19? </h1>
            <p>Faça o teste rápido para a covid-19 gratuitamente, realizando o seu cadastro e agendamento pela plataforma :)</p>
            <Link to="#" className="button2">Começar</Link>
        </div>

           </div>
       </div>
    )
}

export default Home