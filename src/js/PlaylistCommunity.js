import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import PlaylistCard from "./PlaylistCard";

function PlaylistCommunity (){
const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
      fetch('http://34.64.161.129:5000/playlist-community')
          .then(res => res.json())
          .then(json => {
              console.log(json)
              setPlaylist(json.playlist_community)
          });
      },[])
  

  
  
    return(

      <div>
        <div className="container">
          <div id='PlaylistCommunity_intro'>
        <h1 >~WELCOME TO PLIZ~</h1>
          </div>

<div className="row" >
      {playlist.map((pl, index) => (
         
          <PlaylistCard
              key={index}
              id={pl.id}
              like={pl.like}
              title={<Link to={`/playlist-community-id/${pl.playlist_id}`}>{pl.title}</Link>}
              description={pl.description}
              user_name={pl.user_name}
              comments={pl.comments}
              img={pl.image}
              
          />

      ))}
  </div>
</div>

      </div>

 
     
    
);
    }
export default PlaylistCommunity;