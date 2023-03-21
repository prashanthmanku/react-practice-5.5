// Write your code here
const Logout = props => {
  const {className, click} = props
  return (
    <button type="button" className={className} onClick={click}>
      Logout
    </button>
  )
}

export default Logout
