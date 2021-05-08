import React, { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { compose } from 'redux';
import { connect } from 'react-redux';
import Cart from './Cart'
import Home from './Home'
import Login from './Login'

function App(props) {
  const isLogin = props.loginData.isLogin

  useEffect(() => {
    console.log(isLogin)
    return () => {
      
    }
  }, [isLogin])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          {!isLogin ? <Login /> : <Redirect to="/cart"></Redirect>}
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

// ngambil state global dari store. diubah ke props
const mapStateToProps = state => {
  return {
    loginData: state.login,
    cartData: state.cart
  }
}

export default compose(
  connect(mapStateToProps),
)(App)
