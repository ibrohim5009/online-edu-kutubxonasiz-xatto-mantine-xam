import React, { createContext, useState } from 'react'

export const ObjectContext = createContext()

const MyContext = ({ children }) => {
  const [cart, setCart] = useState([])
  return (
    <div>
      <ObjectContext.Provider value={{ cart, setCart }}>
        {children}
      </ObjectContext.Provider>
    </div>
  )
}

export default MyContext