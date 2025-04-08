import React from 'react'
import './Layout.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'


const Layout = ({children}) => {
  return (
      <div className='layout'>
          <div className='layout_upper'>
              <Navbar/>
          </div>
          <div className='layout_middle'>
              {children}
          </div>
          <div className='layout_lower'>
              <Footer/>
          </div>
    </div>
  )
}

export default Layout