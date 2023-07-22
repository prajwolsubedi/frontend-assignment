import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Error = () => {
  return (
    <div>
    <Navbar />
    <div className="bg-[#d6cfcf] h-full">
        <h2 className="font-mono text-lg text-center p-52">
          404! Invalid URL
        </h2>
      </div>
    <Footer />
    </div>
  )
}

export default Error
