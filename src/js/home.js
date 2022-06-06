import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import albumcover from '../cute.jpeg';

import PlaylistCard from "./PlaylistCard";

function Home (props){

    const isLogin = props.isLogin
    const [playlist, setPlaylist] = useState([]);
    const [search, setSearch] =useState('');

    useEffect(() => {
      fetch('http://34.64.161.129:5000/playlist-community')
          .then(res => res.json())
          .then(json => {
              console.log(json)
              setPlaylist(json.playlist_community)
          });
      },[])
  

      const handleSearch =(event)=>{
        setSearch(event.target.value)
      }
  
      const onClickSearch = ()=>{
        
      }

    return(

      <div>

<div className="container"> 
<div id='search-pli-bar'>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search Playlist" aria-label="Search" value={search} onChange={handleSearch}></input>
      <button class="btn btn-outline-success" type="submit" >Search</button>
    </form>
  </div>
<p></p>
  <div className="row" >
  {playlist.slice(5).map((pl, index) => (
         
         <PlaylistCard
             key={index}
             id={pl.id}
             like={pl.like}
             title={<Link to={`/playlist-community-id/${pl.playlist_id}`}>{pl.title}</Link>}
             description={pl.description}
             user_name={pl.user_name}
             comments={pl.comments}
             img={"https://storage.googleapis.com/pliz-bucket/playlist-img/KakaoTalk_Photo_2022-06-05-23-30-12.jpeg"
             }
         />

     ))}
     </div>
     

     </div>
     </div>
     
    
);
    }
export default Home;