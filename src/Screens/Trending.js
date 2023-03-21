import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import APIKit from '../spotify'
import {AiFillPlayCircle} from "react-icons/ai"
import './Trending.css'
import { useNavigate } from 'react-router-dom';

export default function Trending() {

  const [playlist,setPlaylists] = useState([]);

 useEffect(()=>{ APIKit.get('/search?q=trending%20now&type=album').then(function(response){
  console.log(response.data.albums.items);
   setPlaylists(response.data.albums.items);
  })
},[]);

const navigate = useNavigate();

const playplaylistt =(id) => {
  console.log(id);
  navigate('/player',{state:{id:id}})

}

  return (
    <div className='screen-container'>
      <h3 className='trending'>Trending</h3>
       <div className='library-body'>
      {playlist?.map((playlist) => (
          <div className='playlist-card' key={playlist.id} onClick={()=>playplaylistt(playlist.id)}>
          <img src={playlist.images[0].url} className='playlist-image' alt='playlist-Art'></img>
          <p className='playlist-title'>{playlist.name}</p>
          <p className='playlist-subtitle'>{playlist.total_tracks}  Songs</p>
          <div className='playlist-fade'>
            <IconContext.Provider value={{size:"50px",color:"#ffff"}}>
              <AiFillPlayCircle/>
              </IconContext.Provider>
          </div>
          </div>


    ))}</div></div>
  )
}
