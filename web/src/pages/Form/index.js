import React from 'react'
import { Link } from 'react-router-dom'

import { FaLongArrowAltLeft} from 'react-icons/fa';
import './style.css'

function Form () {
    return (
        <div id="pacient-form-page">
            <div id="pacient-form-content" className="container">
            <FaLongArrowAltLeft/>
              <form action="">
                <h1>Cadastro</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h3>

                <label htmlFor="name">
                    <input type="text" placeholder="nome"/>
                </label>

                <label htmlFor="lastname">
                    <input type="text" placeholder="sobrenome"/>
                </label>

                <label htmlFor="cpf">
                    <input type="text" placeholder="CPF"/>
                </label>

                <label htmlFor="password">
                    <input type="password" placeholder="senha"/>
                </label>


                  <input type="checkbox" name="termos" id=""/>
                  Concordo com os termos de Privacidade
                 <Link to="#" className="button"> Cadastrar </Link>
                </form>
            </div>

            <div className="img-container">
                <img src="" alt=""/>
            </div>

         </div>

        )
}

export default Form