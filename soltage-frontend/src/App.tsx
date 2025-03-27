import './App.scss'
import Signin from './Pages/SignIn/Signin'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Signin/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
