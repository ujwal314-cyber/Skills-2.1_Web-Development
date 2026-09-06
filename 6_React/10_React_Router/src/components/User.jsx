import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const use=useParams()
  return (
    <div>
      I am user {use.username}
    </div>
  )
}

export default User
