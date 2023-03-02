import React from 'react'
import { useSelector , useDispatch } from 'react-redux'

const Users = () => {
    const dispatch=useDispatch();
    const userData = useSelector(state => state.userState)

  return (
    <div>
      user
    </div>
  )
}

export default Users
