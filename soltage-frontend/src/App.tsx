import './App.scss'
// import SignInForm from './Pages/SignIn/components/SignInForm/SignInForm'
// import Signin from './Pages/SignIn/Signin'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import AuthBackground from './Components/AuthBackground/AuthBackground'
import SignUpForm from './Pages/SignUp/components/SignUpForm'
function App() {
  
  return (
    <>
      <BrowserRouter>
          <Routes>
            {/* <Route path='/' element = {<Signin/>}/> */}
            <Route path='/' element = {<SignUpForm/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
