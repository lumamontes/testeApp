import React from 'react'
import Logo from '../../assets/images/hospital.svg'
import Doutores from '../../assets/images/doutores.jpg'
import './style.css'
import { Link } from 'react-router-dom'

function Home () {
    return (
       <div id="home-page">
           <div id="home-page-content" className="container">
            <header>
                <img src={Logo} alt="logo"/>
                <nav>
                    <Link to="#" className="">Entrar</Link>
                    <Link to="/cadastro" className="button">Cadastre-se</Link>
                 </nav>
            </header>

            <div id="title-container">
            <div className="text">
            <h1>Você precisa fazer o teste para a Covid-19? </h1>
            <p>Faça o teste rápido para a covid-19 gratuitamente, realizando o seu cadastro e agendamento pela plataforma :)</p>
            <Link to="#" className="button2">Começar</Link>
            </div>

            <div id="home-page-img"> 
                <img src={Doutores} alt=""/>
            </div>
          </div>


           </div>

       </div>
    )
}

export default Home