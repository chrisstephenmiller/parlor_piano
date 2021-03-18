import React from 'react'
import { useAuth } from '../auth'

import { useQuery } from '@apollo/client'
import { users } from '../graphql/query'

const Home = () => {
  const { user, login, logout } = useAuth()
  const { data: usersData } = useQuery(users)

  const User = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{user.name}</span>
      <span>{user.email}</span>
    </div>
  )

  const styleCurrentUser = (user, u) => ({ fontWeight: user.id === u.id ? 1000 : 100 })

  const Users = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {usersData?.users.map((u) => (
        <span style={styleCurrentUser(user, u)} key={u.id}>
          {`${u.id}) ${u.name} - ${u.email}`}
        </span>
      ))}
    </div>
  )

  const LoginLogout = () => (user.id ? <span onClick={logout}>logout</span> : <span onClick={login}>login</span>)

  return (
    <div id="home">
      <div className="login">
        <LoginLogout />
        <br />
        <User />
        <br />
        <Users />
      </div>
    </div>
  )
}

export default Home
