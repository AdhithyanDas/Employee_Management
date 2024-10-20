import React, { useState } from 'react'
import { createContext } from 'react'

export const addEmployeeResponseContext = createContext()

function ContextApi({ children }) {

  const [addResponse, setAddResponse] = useState("")

  return (
    <>
      <addEmployeeResponseContext.Provider value={{ addResponse, setAddResponse }}>
        {children}
      </addEmployeeResponseContext.Provider>
    </>
  )
}

export default ContextApi