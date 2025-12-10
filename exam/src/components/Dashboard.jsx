import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import Crud from '../components/Crud'

export default function Dashboard() {
  return (
    <div>
        <Provider store={store}>
            <Crud />
        </Provider>
    </div>

  )
}
