import * as React from 'react'
import Header from './components/header/header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, レストラン名
      </footer>
    </>
  )
}

export default Layout
