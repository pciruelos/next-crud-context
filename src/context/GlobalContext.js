import {createContext, useContext,useState} from 'react'

export const GlobalContext = createContext();

export const useTask = () => useContext(GlobalContext)
    //{
    //const context = useContext(GlobalContext)
    //return context
    //es lo mismo que esto de arriba
    //}
    //tampoco es necesario que tenga {} ni return


export const ContextProvider = ({children}) => {
    const [tasks, setTasks] = useState([])

    
    return (
        <GlobalContext.Provider value={{tasks}}> 
            {children}
        </GlobalContext.Provider>
    )

}