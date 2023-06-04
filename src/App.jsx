import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import facebook from "./assets/facebook.png"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <div className='container mt-48 flex mx-auto items-center justify-center'>
      <div className="left w-1/3">
        <img  src= "./assets/facebook.png"  />
        <p className='text-3xl mx-6'>Facebook helps you to connect and share people in your life</p>
      </div>
      <div className="right flex flex-col bg-white p-8 rounded-xl w-1/4 border-2 border-gray-200 border">
        <input className='px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg ' type='text' placeholder='email address or phone'/>
        <input className='px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg' type='password' placeholder='password'/>
        <button className='bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold text-xl'>Log in</button>
        <span className='text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline'>Forgotten passwpord</span>
        <hr className='my-2'/>
        <button className='bg-green-600 hover:bg-green-700 text-white my-2 px-4 mx-auto py-3 rounded-md font-bold text-xl w-fit'>create new account</button>
      </div>
     </div>
  
  </div>
  )
}

export default App
