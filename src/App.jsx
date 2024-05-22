import React, { useEffect, useState } from 'react'
import useCustomHook from './useCustomHook'
const LightAndDark = () => {

const [theme,handleChange] = useCustomHook()
 
    return (
        <div className='container' theme-color={theme}>
     <h1>Light and Darkmode</h1> 
     <button onClick={handleChange} className='btn'>Change theme</button>
    </div>
  )
}

export default LightAndDark
