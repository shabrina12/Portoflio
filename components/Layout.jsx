import React from 'react'
import Head from 'next/head'
import { Footer, Navbar } from '../components'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Head>
            <title>Portfolio</title>
        </Head>
        <Navbar />
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout