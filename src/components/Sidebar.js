import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarButton from './SidebarButton'
import {MdSearch} from "react-icons/md"
import {MdSpaceDashboard} from "react-icons/md"
import {FaGripfire,FaPlay} from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import {IoLibrary} from "react-icons/io5"
import apiClient from '../spotify'

export default function Sidebar() {
  const [image,setImage] = useState("https://contentstatic.techgig.com/photo/87644309/Believe-It-Naruto-is-coming-to-Fortnite-this-November.jpg")


  const handleLogout= () => {
  //  localStorage.clear()
  //   window.location.replace("/t")
   }
  

  useEffect(()=>{
    apiClient.get("me").then(response => {
      setImage(response.data.images[0].url);});

  },[])
  return (
    <div className='sidebar-container'>
        <img src={image} className='profile-img' alt='profile'/>
        <div>
        {/* <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>} /> */}
        <SidebarButton  title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SidebarButton  title="Player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton  title="Search" to="/search" icon={<MdSearch/>}/>
        <SidebarButton  title="Library" to="/" icon={<IoLibrary/>}/>


        </div>
        <SidebarButton  title="Sign Out" onClick ={handleLogout()}    icon={<FaSignOutAlt/>}/>
        

    </div>

    

    
)
}
