import React,{useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { fetchUser } from '../redux/users/userAction';

const Users = () => {
    const dispatch=useDispatch();
    const userData = useSelector(state => state.userState);

  useEffect(()=>{
    dispatch(fetchUser());
  },[])

  return (
    <div>
      {
        userData.loading ?
        <h2>Lodaing ...</h2>:
        userData.error ?
        <p>{userData.error}</p> :
        userData.users.map(user => <p key={user.id}>{user.name}</p>)
      }
    </div>
  )
}

export default Users
