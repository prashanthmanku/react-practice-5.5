// Write your code here
import './index.css'

const Login = props => {
  const {className, click} = props

  return (
    <button type="button" className={className} onClick={click}>
      Login
    </button>
  )
}

export default Login
