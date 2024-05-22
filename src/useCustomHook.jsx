

import React, { useEffect, useState } from 'react'

const useCustomHook = () => {
    const [theme,setTheme] =useState(JSON.parse(localStorage.getItem("themeMode"))||"dark")
   

    const storeLocalStorage =(theme)=>{
    localStorage.setItem("themeMode",JSON.stringify(theme))
    }
    useEffect(()=>{
    storeLocalStorage(theme)
    },[theme])
    const handleChange = ()=>{
    const getItem = JSON.parse(localStorage.getItem("themeMode"))
    if (getItem === "dark") {
    setTheme("light")
    }
    else{
    setTheme("dark")
    }
    }

    return [theme,handleChange]

}

export default useCustomHook
