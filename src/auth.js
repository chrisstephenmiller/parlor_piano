import React, { useState, useEffect, useContext, createContext } from 'react'
import axios from 'axios'

const authContext = createContext()

function useProvideAuth() {
  const [user, setUser] = useState({})

  const login = () => {
    const api = process.env.REACT_APP_API_URL
    const loginUrl = api + '/auth/google'
    window.location.href = loginUrl
  }

  const logout = async () => {
    await axios.post('/auth/logout')
    setUser({})
    window.location = '/'
  }

  const getUser = async () => {
    const res = await axios.get('/auth/me')
    setUser(res.data || {})
  }

  useEffect(() => {
    getUser()
  }, [])

  return {
    user,
    getUser,
    login,
    logout
  }
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}
