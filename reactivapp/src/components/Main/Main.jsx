import React, { Component } from 'react'
import Products from '../Products'
import About from '../About'
import Staff from '../Staff'
import Contact from '../Contact'
import Donate from '../Donate'
import Pokeuser from '../Pokeuser'
import Topic from '../Topic'

import {Route, Routes} from 'react-router-dom';


export class Main extends Component {
    render() {
        return (
            <main>
                <h4>Esto es el main</h4>
                <p>Sección principal donde haremos las redirecciones con "Routes"</p>
                <hr />
            <Routes>
                <Route path="/" element={<Products/>} exact />
                <Route path="/about" element={<About/>} />
                <Route path="/staff" element={<Staff/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/donate" element={<Donate/>} />
                <Route path="/pokeuser" element={<Pokeuser/>} />
                <Route path="/topic" element={<Topic/>} />

            </Routes>
            </main>
        )
    }
}
export default Main


