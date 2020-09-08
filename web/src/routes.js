import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import RegisterForm from './pages/Form'

function Routes () {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/cadastro" exact component={RegisterForm}/>
        </BrowserRouter>
    )
}

export default Routes;