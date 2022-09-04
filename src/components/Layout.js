import React from "react";
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useTask} from '../context/GlobalContext'

const Layout = ({ children }) => {
  const {tasks} = useTask()
  const router = useRouter()
  return (
    <div>
      <header className="flex justify-around bg-blue-900 items-center h-[60px] py-5">
        <Link href="/">
        <a>
          <h1 className="font-black text-lg  text-white">Add your Joke App</h1>
          </a>
        </Link>
        <span className="text-black font-bold bg-yellow-400 rounded-3xl p-1">{tasks.lenght}</span>
        <div>
          <button onClick={()=>router.push('/TaskForm')} className="bg-blue-200 px-4 py-2 rounded hover:bg-yellow-400">
            añadir tarea +
          </button>
        </div>
      </header>
      <hr />
      <main className="bg-gray-700 w-full h-screen py-5">
        <div className="w-[80%] mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
