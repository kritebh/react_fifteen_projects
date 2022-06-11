import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  const [people,setPeople] = useState(data)
  const [index,setIndex]= useState(0)

  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex((index+1) % people.length)
    },5000)

    return () => clearInterval(slider)
  },[index,people])

  return <section className='section'>
      <div className='title'>
        <h2>
          <span>/ Testimonials</span>
        </h2>
      </div>
      <div className='section-center'>
          {people.map((p,i)=>{
              const {id,image,name,title,quote} = p;

              let position = 'nextSlide'
              if(i===index){
                position = 'activeSlide'
              }
              if(i===index-1 || index === (index===0 && people.length-1)){
                position = "lastSlide"
              }
              
              return <article className={position} key={id}>
                <img src={image} className="person-img"></img>
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
              </article>
          })}
          <button className='prev'  onClick={()=>{ let newIndex = index -1
            if(newIndex < 0 ){
              newIndex = newIndex + people.length
            }
            setIndex(newIndex)
          }}>
            <FiChevronLeft/>
          </button>
          <button className='next'  onClick={()=>setIndex((index+1)%people.length)}>
            <FiChevronRight/>
          </button>
      </div>
    </section>;
}

export default App;