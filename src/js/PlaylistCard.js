import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PlaylistCard({ id, like, title, description, user_name, comments, img }) {
  const [playlist, setPlaylist] = useState([]);
   
     <div id='PlaylistCommunity_intro'>
        <h1 >~WELCOME TO PLIZ~</h1>
          </div>


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
      playlist_id : {id}
    })
})
    .then(res => res.status == 200)
    .then(res => {
        console.log(res)
        
    })

  
}
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
      comment: 'better now!!!!!!!!!',
    })
})
    .then(res => res.status == 200)
    .then(res => {
        console.log(res)
    })

  
}

  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`playlist-community-id/${id}`}>{title}</Link>
          </h5>
          <h6 className="card-subtitle text-muted">
            {description.slice(0, 20) + "..."}
          </h6>
        </div>
        <div className="col-md-8">
          <img 
          src={img} 
          className="img-fluid"
          alt="loading..."
        />
        </div>
        <div className="m-1">
          <div className="icon">
            <div>
              <span className="material-icons-round" >favorite_border</span>
              <span className="material-icons-outlined" >chat_bubble_outline</span>
              <span className="material-icons-outlined">send</span>
            </div>
          </div>

          <i>
            <div className="like">{like + "명이 좋아합니다"}</div>
          </i>
          <i>
            <div className="feed-text">
              <b>{user_name}</b> {" "} {title}
            </div>
          </i>
          <div className="comment">
            {comments.map((comment) => (
              <div>
                <b>{comment.user_name}</b>
                {" " + comment.comment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

PlaylistCard.propTypes = {
  id: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  user_name: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  img: PropTypes.string
};

export default PlaylistCard;