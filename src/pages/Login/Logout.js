import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const Logout = () => {
    useEffect(() => {
        localStorage.clear();
        sessionStorage.clear();
    }, [])
  return (
    <Redirect to="/login" />
  )
}

export default Logout
