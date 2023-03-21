// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onloginout = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="bg-container">
        <div className="card-bg">
          {isLogin && (
            <div>
              <Message className="message" messageText="Welcome User" />
              <Logout className="button" click={this.onloginout} />
            </div>
          )}
          {!isLogin && (
            <div>
              <Message className="message" messageText="Please Login" />
              <Login className="button" click={this.onloginout} />
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home
