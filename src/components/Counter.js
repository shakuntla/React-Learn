import React, { useState } from 'react'
export default function Counter() {
    
    const[count,setCount] = useState(0);

     const increase = () => {
        setCount(count+1)
    }
    const reset = () => {
        setCount(0)
    }
     const decrease = () => {
        setCount(count-1)
    }

  return (
    <div className="cursor-pointer ">
        <div className='flex justify-center items-center w-full h-screen'> 
            <div className=" flex flex-col justify-center items-center border-x-2 border-y-2 border-black w-[500px] h-[300px] rounded-xl bg-red-200">
                <h1 className='text-[30px]'> {count} </h1>
                <div className=''>
                    <button className='h-[45] w-28 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' onClick={increase}> Increase</button>
                    <button className='h-[45] w-28 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={reset}>Reset</button>
                    <button className='h-[45] w-28 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={decrease}>Decrease</button>
                </div>
            </div>           
        </div>
    </div>
   
  )
}
