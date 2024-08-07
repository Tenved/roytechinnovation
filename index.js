import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound1, { NotFound } from './views/not-found'
import AboutUs from './views/about-us'
import Services from './views/services'
import Contact from './views/contact'
import Minecraft from './views/minecraft'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Services} exact path="/services" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Minecraft} exact path="/minecraft" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
