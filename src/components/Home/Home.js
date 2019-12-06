import React, { Component } from 'react'
import { Route, Redirect, Switch, NavLink } from 'react-router-dom'
import Address from '../Home/Address/Address'
import Price from '../Home/Price/Price'
import Class from '../Home/Class/Class'
import Check from '../Home/Check/Check'
export default class Router extends Component {
  render() {
    return (
      <div className='home-page'>
        <div className='nav'>
          <NavLink to='/home/address'>区域</NavLink>
          <NavLink to='/home/price'>价格</NavLink>
          <NavLink to='/home/class'>户型</NavLink>
          <NavLink to='/home/check'>筛选</NavLink>
        </div>
      <Switch>
        <Route path='/home/address' component={Address}></Route>
        <Route path='/home/price' component={Price}></Route>
        <Route path='/home/class' component={Class}></Route>
        <Route path='/home/check' component={Check}></Route>
        <Redirect to='/home/address'></Redirect>
      </Switch>
      </div>
    )
  }
}

