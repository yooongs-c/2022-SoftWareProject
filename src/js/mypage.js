import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import albumcover from '../1.jpeg';
import '../css/mypage.css';

function Mypage() {

  const [info, setInfo] = useState([]);
  const [like, setlike] = useState("");
  const [follow, setFollow] = useState([]);
  const [follower, setFollower] = useState([]);
  const [my, setMy] = useState([]);

  const [intro, setIntro] = useState('introduce yourself.');
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://34.64.161.129:5000/user-info/${id}`)
      .then(res => res.json())
      .then(json => {
        setInfo(json);
        setlike(json.like_playlist);
        setMy(json.my_playlist);
       });
  }, [])
     
  useEffect(() => {
    fetch(`http://34.64.161.129:5000/follow-list/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setFollow(json.follow_list)
        console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
      });
  }, [])

  useEffect(() => {
    fetch(`http://34.64.161.129:5000/follower-list/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setFollower(json.follower_list)
        console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

      });
  }, [])

  console.log(like)

  const getRandomIndex = function (length) {
    return parseInt(Math.random() * length)
  }

  const handleIntro =(event) =>{
    
  }
  const onClickLogout = () => {
    localStorage.removeItem('login-token')
    document.location.href = '/'
  }

  function List({ title }) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {title}
      </li>
    );
  }


  return (
    <div>

      <div className="container">
    <h1>Mypage</h1>
    
        <div className="card bg-dark text-black">
          <img src={albumcover} height='200px' className="card-img" alt="..."></img>
          <div className="card-img-overlay">
            <h1 className="card-title">{info.name}</h1>
            <p className="card-text">{intro}</p>
            <p className="card-text">contact me: <a href="/playlist-community" style={{ color: 'black' }}>{info.email}</a></p>
            <button type="button" class="btn btn-outline-light btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">수정하기</button>
          </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">소개글</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <input type="text" value={intro} onChange={handleIntro} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
          
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>


        <div className="card text-center" >
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <a className="nav-link active" href="#">Playlist</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/playlist-community">Playlist Community</a>
              </li>

            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title" >{
              my.slice(0,2).map((m,index)=>(
                <p key={index}>{m.title}</p>
              ))
            }</h5>
            <a href="#" className="btn btn-primary">See More List</a>
          </div>
        </div>
      </div>


      <div className="container" >
        <div className="row">

          <div className="col-md-4">
            <h1 >Follow {follow.length}</h1>
            
            <ul className="list-group">
            {follow.map((f) => (
                <li key={f.user_id} className="list-group-item d-flex justify-content-between align-items-center">
                  {f.name}
                  <span className="badge bg-primary rounded-pill">

                    <Link to={`/user-info/${f.user_id}`}>go</Link>                </span>
                </li>

              ))}
            </ul>
          </div>

          <div className="col-md-4">
            <h1>Follower {follower.length} </h1>
            <ul className="list-group">

              {follower.map((f) => (
                <li key={f.user_id} className="list-group-item d-flex justify-content-between align-items-center">
                  {f.name}
                  <span className="badge bg-primary rounded-pill">

                    <Link to={`/user-info/${f.user_id}`}>go</Link>                </span>
                </li>

              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h1>LIKE {like.length}</h1>
            <ul className="list-group">
              {like && like.map((l) => (
                <li key={l.playlist_id} className="list-group-item d-flex justify-content-between align-items-center">
                  {l.title}
                  <span className="badge bg-primary rounded-pill">{l.like}</span>
                </li>
              ))}

            </ul>

          </div>
        </div>

      <div >
    <button  type='button' onClick={onClickLogout} className="btn btn-outline-light "> Logout</button>
    
    </div>
      </div>

    
      </div>


  );
}

export default Mypage;