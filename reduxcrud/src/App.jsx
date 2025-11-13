import React from 'react'
import { Store } from './Store/Store'
import Crud from './Components/Crud'
import { Provider } from 'react-redux'


export default function App() {
  return (
    <Provider store={Store}>
      <Crud />
    </Provider>
  )
}
