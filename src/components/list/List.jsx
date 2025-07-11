import Chatlist from './chatlist/Chatlist';
import './list.css';
import Userinfo from './userinfo/Userinfo';
const list = () => {
  return (
    <div className='list'>
      <Userinfo></Userinfo>
      <Chatlist></Chatlist>
    </div>
  )
}

export default list