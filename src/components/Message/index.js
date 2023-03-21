// Write your code here
const Message = props => {
  const {messageText, className} = props
  return <h1 className={className}>{messageText}</h1>
}
export default Message
