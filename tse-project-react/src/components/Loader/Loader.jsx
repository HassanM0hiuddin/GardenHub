import React from 'react'
import {Grid} from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='flex pt-40 justify-center h-screen w-full'>
    
    <Grid
  visible={true}
  height="80"
  width="80"
  color="#052E16"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />
  
    </div>
  )
}

export default Loader