import './App.scss'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Signin from './Pages/SignIn/Signin'
import Signup from './Pages/SignUp/SignUp'
// import { Amplify } from "aws-amplify"
// import awsexports from"./aws-amplify/aws-exports.js"
function App() {
  
  // Amplify.configure(awsexports);
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Signin/>}/>
            <Route path='/signup' element = {<Signup/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
