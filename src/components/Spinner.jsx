import React from 'react'
import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <div className='flex item-center justify-center p-4 my-4'>
      <img src={spinner} alt="" className='w-60 h-60' />
    </div>
  )
}

export default Spinner
