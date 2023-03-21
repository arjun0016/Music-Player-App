import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import APIKit from '../spotify'
import {AiFillPlayCircle} from "react-icons/ai"
import './Library.css'
import { useNavigate } from 'react-router-dom';

export default function Library() {

  const [playlist,setPlaylists] = useState(null);

 useEffect(()=>{ APIKit.get('me/playlists').then(function(response){
   setPlaylists(response.data.items);
   console.log(response.data.items);
  })
},[]);

const navigate = useNavigate();

const playplaylist =(id) => {
  console.log(id);
  navigate('/player',{state:{id:id}})

}

  return (
    <div className='screen-container'>
      <div className='library-body'>
      {playlist?.map((playlist) => (
      <div className='playlist-card' key={playlist.id} onClick={()=>playplaylist(playlist.id)}>
        <img src={playlist.images[0].url} className='playlist-image' alt='playlist-Art'></img>
        <p className='playlist-title'>{playlist.name}</p>
        <p className='playlist-subtitle'>{playlist.tracks.total}  Songs</p>
        <div className='playlist-fade'>
          <IconContext.Provider value={{size:"50px",color:"#ffff"}}>
            <AiFillPlayCircle/>
            </IconContext.Provider>
        </div>
        </div>

    ))}</div></div>
  )
}
