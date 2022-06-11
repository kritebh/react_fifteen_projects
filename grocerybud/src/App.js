import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


const getListFromLocalStorage = ()=>{
  let list = localStorage.getItem("list")

  if(list){
    return JSON.parse(list)
  }
  else{
  return []
  }
}


function App() {

  const [name, setName] = useState('');
  const [list, setList] = useState(getListFromLocalStorage());
  const [isEditing, setisEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" })


  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list))
  },[list])


  function handleSubmit(e) {
    e.preventDefault()

    if (!name) {
        showAlert(true,"danger","Please enter some tasks")
    }
    else if (name && isEditing) {
        setList(list.map((item)=>{
          if(item.id===editID){
            return {...item,title:name}
          }
          return item
        }))

        setName("");
        setEditID(null)
        setisEditing(false)
        showAlert(true,"success","Items Updated")

    }
    else {
      showAlert(true,"success","item added to the list")
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      }
      setList([...list, newItem])
      setName('')
    }
    console.log("Working")
  }


  const clearList = () =>{
    showAlert(true,"danger","All Items Deleted")
    setList([])
  }

  const showAlert = (show=false,type="",msg="")=>{
      setAlert({show,type,msg})
  }


  const removeItem = (id) =>{
    showAlert(true,"danger","Item deleted")
    setList(list.filter((item)=>item.id!==id))
  }

  const editItem = (id) =>{
    const specificItem = list.find((item)=>item.id===id);
    setisEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit} >
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>Grocery List</h3>
        <div className='form-control'>
          <input type="text" className='grocery' placeholder='ex. Eggs,Oil' value={name} onChange={(e) => setName(e.target.value)}></input>
          <button type='submit' className='submit-btn'>
            {isEditing ? 'Edit' : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 &&
        (<div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem}/>
          <button className='clear-btn' onClick={clearList} > Clear Items </button>
        </div>)
      }
    </section>
  )
}
export default App