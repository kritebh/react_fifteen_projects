import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {

  const {isSideBarOpen,closeSidebar} = useGlobalContext()
  

  return (
    <aside className={`sidebar ${isSideBarOpen?"show-sidebar":""}`}>
      <div className='sidebar-header'>
        <img src={logo} className="logo" alt='logo'></img>
        <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
      </div>
      <ul className='links'>
        {links.map(l=>{
          const {id,url,text,icon} = l;

          return <li key={id}><a href={url}> {icon}{text}</a></li>
        })}
      </ul>
      <ul className='social-icons'>
        {social.map(s=>{
          const {id,url,icon} = s;
          return <li key={id}><a href={url}></a>{icon}</li>
        })}
      </ul>
    </aside>
  )
}

export default Sidebar