import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams()
  return (
    <div className='bg-gray-500 text-3xl p-4 text-center m-4'>User : {userId}</div>
  )
}

export default User