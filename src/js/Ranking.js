import React, { useState, useEffect } from "react";

function Ranking(){

    const [lastfmList, setLastfmList] = useState([]);
    const[ranking, setRanking] = useState([]);
    const[follower, setFollower] = useState([]);
    useEffect(() => {
        fetch('http://34.64.161.129:5000/lastfm-ranking')
            .then(res => res.json())
            .then(json => {
              
            setLastfmList(json.ranking)   
            });
        },[])

        console.log(lastfmList)

    useEffect(() => {
        fetch('http://34.64.161.129:5000/playlist-ranking')
            .then(res => res.json())
            .then(json => {
            console.log(json)
            setRanking(json.ranking)
            });
        },[])

        useEffect(() => {
            fetch('http://34.64.161.129:5000/follower-ranking')
                .then(res => res.json())
                .then(json => {
                console.log(json)
              setFollower(json.ranking)
                });
            },[])

    return( 
        <div>
                 <div class="container" justify-align='center'>
                 <div id='PlaylistCommunity_intro'>
        <h1 >~Ranking Chart~</h1>
          </div>

        <div class="row">
     
          <div class="col-md-4">
            <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">플레이리스트 순위</h5>
                </div>                
                <div class="card-body">
                    <ol class="list-group list-group-numbered">
                    {
                        ranking&&ranking.map((r,index)=>(
                                <li key={index} className=" list-group-item d-flex justify-content-between align-items-center">
                                    {r.title}
                                    <span className="badge bg-primary rounded-pill ">{r.like}</span> 
                                </li>
                                
                            ))
                        }
                      </ol>
                      
                </div>
              
            </div>
          </div>
   
        <div class="col-md-4">
            <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">실시간 음악 차트</h5>
                 
                </div>
                

                <div class="card-body">
                    <ol>
                    {
                            lastfmList&&lastfmList.slice(0,20).map((l,index)=>(
                                <li key={index}>
                                   
                                    <a href={`https://youtube.com/results?search_query=${l.title + l.singer}`}>{l.title}</a>
                                    
                                </li>
                            ))
                        }
                      </ol>
                      
                </div>
        
            </div>
          </div>
      
          <div class="col-md-4">
            <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">Pliz 팔로워 순위</h5>
                
                </div>
                

                <div class="card-body">
                    <ol>
           
                          {
                            follower&&follower.map((f,index)=>(
                                <li key={index}>
                                    {f.name}
                                </li>
                            ))
                        }
                      </ol>
                      
                </div>
                
          
            </div>
          </div>
        </div>
      </div>
      <br/>

        </div>
        
    );
}

export default Ranking;