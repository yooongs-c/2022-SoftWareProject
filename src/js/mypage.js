import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import { Link, useParams } from "react-router-dom";
import albumcover from '../1.jpeg';
import Page from "./Page";

function Mypage() {

  const [info, setInfo] = useState([]);
  const [like, setlike] = useState("");
  const [follow, setFollow] = useState([]);
  const [follower, setFollower] = useState([]);
  const [intro, setIntro] = useState('introduce yourself.');
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://34.64.161.129:5000/user-info/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setInfo(json);
        setlike(json.like_playlist);

        console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
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

        <div className="card bg-dark text-black">
          <img src={albumcover} height='200px' className="card-img" alt="..."></img>
          <div className="card-img-overlay">
            <h1 className="card-title">{info.name}</h1>
            <p className="card-text">{intro}</p>
            <p className="card-text">contact me: <a href="/playlist-community" style={{ color: 'black' }}>{info.email}</a></p>
            <button type="button" class="btn btn-outline-light btn-sm" style={{margin}}>수정하기</button>
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
            <h5 className="card-title" >pli_title</h5>
            <p className="card-text">pli_description</p>
            <a href="#" className="btn btn-primary">See More Song</a>
          </div>
        </div>
      </div>


      <div className="container" >
        <div className="row">

          <div className="col-md-4">
            <h1 data-bs-toggle="modal" data-bs-target="#exampleModal">Follow {follow.length}</h1>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//모달이 되니까 모달 컴포넌트 만들어서 props로 보내면..?!

              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Follow</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>

            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
                <span className="badge bg-primary rounded-pill">14</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <span className="badge bg-primary rounded-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Morbi leo risus
                <span className="badge bg-primary rounded-pill">1</span>
              </li>
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
      </div>


    </div>


  );
}

export default Mypage;
