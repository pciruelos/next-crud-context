import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
       <header>
       <h1>Task App </h1>
        <div>
            <button className='bg-blue-700 p-11'>Aniadir tarea</button>
        </div>
       </header>
       {children}
    </div>
  )
}

export default Layout