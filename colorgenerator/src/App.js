import { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {

  const [color,setColor] = useState('')
  const [error,setError] = useState(false)
  const [list,setList] = useState(new Values("#9d03fc").all(10))

  const handleSubmit =(e)=>{
    e.preventDefault()
    try{
      let colors = new Values(color).all(10)
      setList(colors)
    }
    catch(error){
      console.log(error)
      setError(true)
    }
  }

  return <>
    <section className='container'>
      <h3>Color Generator </h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} className={error?"error":""} placeholder='#9d03fc' onChange={(e)=>setColor(e.target.value)}></input>
        <button className='btn' type='submit'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((l,i)=>{
          return <SingleColor key={i} {...l} index={i}/>
      })}
    </section>
  </>
}

export default App