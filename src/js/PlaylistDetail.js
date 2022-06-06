import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchSong from "./SearchSong";
import {Modal, Button} from 'react-bootstrap';

function Playlistdetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState();
  const [comment, setComment] =useState("");

  const getPlaylist = async () => {
    const json = await (
      await fetch(`http://34.64.161.129:5000/playlist-community-id/${id}`)
    ).json();
    setInfo(json);
    setComment(json.comments)
    setLoading(false);
  };
  useEffect(() => {
    getPlaylist();
  }, []);

  const onClickLike=()=>{
 
    fetch('http://34.64.161.129:5000/like', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'charset': 'utf-8',
          "Authorization": localStorage.getItem('login-token'),
  
      },
      body: JSON.stringify({
        'playlist_id' : id
      })
  })
      .then(res => res.status == 200)
      .then(res => {
          console.log(res)
          
      }) 
  document.location.href ='/playlist-community'
  }


  const handleComment =(event)=>(
    setComment(event.target.value)
  )

  const onClickComment=()=>{
    fetch('http://34.64.161.129:5000/playlist-comment', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'charset': 'utf-8',
          "Authorization": localStorage.getItem('login-token'),
  
      },
      body: JSON.stringify({
        playlist_id : id,
        comment: comment,
      })
  })
      .then(res => res.status == 200)
      .then(res => {
          console.log(res)
      })
  
    setComment('');
  }

  return (
    <div>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div className="container">
          <h1>{info.title}</h1>
    
          <p>{info.description}</p>
          <div className="icon" >
            <div>
              <span className="material-icons-round" onClick={onClickLike}>favorite_border</span>
              <span className="material-icons-outlined" >chat_bubble_outline</span>
              <span className="material-icons-outlined">send</span>
            </div>

            

<form>
<div class="input-group mb-3">
        <textarea class="form-control" placeholder="write your comments" value={comment} onChange={handleComment}>{onClickComment.onClickComment}</textarea>
   <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={onClickComment}>Enter</button>
</div>
</form>


        
          </div>
          <ol className="list-group list-group-numbered">
            {info.song.map((s, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <a href={`https://youtube.com/results?search_query=${s.title + s.singer}`}>{s.title}</a>
                  </div>
                  {s.singer}
                </div>
              </li>
               ))}
          </ol>

          <SearchSong />
        </div>
      )}
    </div>
  );
}

export default Playlistdetail;