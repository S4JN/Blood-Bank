import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
        <div className='header'><Header /></div>
        <div className='contnet'>{children}</div>
    </>
  )
}

export default Layout