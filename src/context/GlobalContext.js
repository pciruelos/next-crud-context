import {createContext, useContext,useState} from 'react'
import {v4 as uuid} from 'uuid'

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

    const createJoke = (title, description) => {
        setTasks([...tasks, {title,description,id:uuid()}])
    }

    const editJoke = (id, updatedJoke) => 
        setTasks([...tasks.map(t => t.id === id ? {...t,...updatedJoke} : t)])
    
    const deleteTask = id => setTasks([...tasks.filter(t => t.id !== id)])


    return (
        <GlobalContext.Provider value={{tasks,createJoke,editJoke,deleteTask}}> 
            {children}
        </GlobalContext.Provider>
    )

}