"use client"

import React from 'react'
import { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [MainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    settitle("")
    setdesc("")
    setMainTask([...MainTask, { title, desc }])
    console.log(MainTask)
  }

  const deleteHandler = (i) => {
    let copyTask = [...MainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }


  let renderTask = <h2>No tasks...</h2>;
  if (MainTask.length > 0) {

    renderTask = MainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex justify-between mb-5 w-screen'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h5 className='text-xl font-semibold'>{t.desc}</h5>
            <button onClick={() => { deleteHandler(i) }} className='bg-green-600 text-white py-2 w-[70px] rounded-md font-bold mr-7'>Delete</button>

          </div>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className='bg-rose-500 text-white p-5 text-xl font-bold text-center mb-10 w-screen'>TodoList</h1>
      <form onSubmit={submitHandler}>
        <input type='text' className='border-zinc-800 text-2xl border-4 m-5 px-4 py-2 rounded-sm' placeholder='Enter the title' value={title} onChange={(e) => { settitle(e.target.value) }}></input>
        <input type='text' className='border-zinc-800 text-2xl m-5 border-4 px-4 py-2 rounded-sm' placeholder='Enter the description' value={desc} onChange={(e) => { setdesc(e.target.value) }}></input>
        <button className='bg-blue-600 text-white px-4 py-3 rounded-md m-5 font-bold'>ADD TASK</button>
      </form>

      <div className='p-8 bg-slate-200 w-screen'>
        <ul>
          {renderTask}

        </ul>
      </div>


    </>
  )
}

export default page
