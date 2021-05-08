import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import Login from './Login'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          {!isLogin ? <Login onLogin={()=>setIsLogin(true)} /> : <Redirect to="/cart"></Redirect>}
        </Route>
        <Route exact path="/">
          {isLogin ? <Home /> : <Redirect to="/login"/>}
        </Route>
        <Route exact path="/cart">
          {isLogin ? <Cart /> : <Redirect to="/login"/>}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
