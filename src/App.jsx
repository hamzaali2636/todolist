import React, { useState } from 'react'
import "./App.css";


function App() {
  const [initial, setInitial] = useState();
  const [addTask, setTask] = useState([]);


  const getData = (event) => {
    setInitial(event.target.value)
  }

  const saveData = () => {
    let store = [...addTask, initial]
    setTask(store)
    setInitial("")


  }

  const deleteTsk = (index) => {
    let filter = addTask.filter((cvalue, id) => {
      return id != index

    })
    setTask(filter)

  }


  return (
    <>
  <div className='container'>
    <div className='dataInput'>
      <input type="text"  onChange={getData} value={initial} />
      <button onClick={saveData}>Add</button>
    </div>
    {addTask.map((calValue, index) => {
      return(
        <>
        <div className='Tasks'>
          <div className='task-Container'>
          <p>{calValue}</p>
          <button className='taskbtn' onClick={()=>{deleteTsk(index)}}>Complete</button>
          </div>
        </div>
        </>
      )
    })}
  </div>
    </>
  )
}

export default App
