import React, { createContext , useState } from 'react'

const DataContext = createContext();

export const DataProvider = ({ children }) =>{

    const [name , setName] = useState("Paul Prabhakaran")

    return (
        <DataContext.Provider value={{
            name , setName
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext

