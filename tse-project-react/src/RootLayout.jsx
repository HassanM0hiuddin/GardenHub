import React from 'react'
import App from './App'
import { Outlet } from 'react-router-dom'
import Header from './components/Common/Header'
const RootLayout = () => {
  return (
    <>
    
    <Header/>
    <div className='pt-10'>

    <Outlet/>
    </div>

    </>
  )
}

export default RootLayout