import { useState } from 'react'
import Crud from './Crud'
import Crudwd from './Crudwd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Crud/> */}
     <Crudwd/>
    </>
  )
}

export default App
