
import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import APIKit from '../spotify'
import {AiFillPlayCircle} from "react-icons/ai"
import './Library.css'
import { useNavigate } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';



export default function Search() {
    const [playlist,setPlaylists] = useState([]);
    const [query, setQuery] = useState('');


    const handleSubmit = (event) => {
      event.preventDefault();
      APIKit.get(`/search?q=${query}&type=album%2Ctrack&limit=50`).then(function(response){
        console.log(response.data.albums.items);
         setPlaylists(response.data.albums.items);
        })
    };

 useEffect(()=>{ APIKit.get(`/search?q=${query}%20now&type=album`).then(function(response){
  console.log(response.data.albums.items);
   setPlaylists(response.data.albums.items);
  })
},[]);


console.log(query);

const navigate = useNavigate();

const playplaylistt =(id) => {
  console.log(id);
  navigate('/player',{state:{id:id}})

}
  return (
    <div className='screen-container 'align="center">
      <form
       onSubmit={handleSubmit}
        className="search-bar">
      <input type="text" placeholder="Search"
        onChange={(e)=>setQuery(e.target.value)}
        className="search-input" />
      <button type="submit" className="search-button btn btn-success" ><MdSearch className=''/></button>
    </form>

      <div className='screen-container'>
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


    </div>
  )
}
