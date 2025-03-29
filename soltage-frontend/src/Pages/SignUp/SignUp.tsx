import AuthBackground from '../../Components/AuthBackground/AuthBackground'
import SignUpForm from './components/SignUpForm'
import "./SignUp.scss"

export default function SignUp() {
  return (
    <>
    <div className='sign-up-form-container'>
        <AuthBackground>
        <SignUpForm />
        </AuthBackground>
      </div>
    </>
  )
}
