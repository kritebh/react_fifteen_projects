import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {

  //States
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  useEffect(() => {
    getTours();
  }, [])

  const getTours = ()=>{
    fetch(url)
      .then(data => data.json())
      .then((data) => {
        setLoading(false)
        setTours(data)
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const removeTour = (id) =>{
    const newTours = tours.filter(tour=>{
     return tour.id!==id
    })

    setTours(newTours)
  }

  if (loading) {
    return <main>
      <Loading />
    </main>
  }


  if(tours.length===0){
    return <main>
      <div className='title'>
        <h2>No Tours Left</h2>
        <button onClick={getTours} className="btn">Refresh</button>
      </div>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App

