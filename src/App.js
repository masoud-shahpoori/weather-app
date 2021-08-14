// npm i redux react-redux redux-thunk axios bootstrap sass react-bootstrap-icons react-router-dom
import React from 'react'
import {
  Switch,
  Route,

} from "react-router-dom";
import HomePage from './pages/homePage'
import DayDetail from './pages/dayDetail'
import ErrorPage from './pages/errorPage'
import './Style/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <Switch>
    <Route exact path="/detail/:id">
      <DayDetail />
    </Route>

    <Route exact path="/">
      <HomePage />
    </Route>
    <Route>
      <ErrorPage/>
    </Route>
  </Switch>
  )
}
