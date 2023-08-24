import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='flex w-full'>
      <div className='w-1/6 my-auto'>
        <Navbar></Navbar>
      </div>
      <div className='w-5/6'>
      <Outlet></Outlet>
      </div >
      
    </div>
  )
}

export default Main