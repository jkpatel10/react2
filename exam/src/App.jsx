import React from 'react'
// import Crud from './components/Crud'
// import { Provider } from 'react-redux'
// import { store } from './store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
           <Route path='/' Component={Register}></Route>
           <Route path='/login' Component={Login}></Route>
           <Route path='/dashboard' Component={Dashboard}></Route>
         </Routes>
      </BrowserRouter>
      {/* <Provider store={store}>
        <Crud />
      </Provider> */}
    </div>
  )
}
