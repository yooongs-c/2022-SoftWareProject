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


    useEffect(() => {
        fetch('http://34.64.161.129:5000/playlist-ranking')
            .then(res => res.json())
            .then(json => {
         
            setRanking(json.ranking)
            });
        },[])

        useEffect(() => {
            fetch('http://34.64.161.129:5000/follower-ranking')
                .then(res => res.json())
                .then(json => {
        
              setFollower(json.ranking)
                });
            },[])

    return( 
        <div>
                 <div class="container" justify-align='center'>
                 <div id='flux'>
        <h3 >~Ranking Chart~</h3>
          </div>

        <div class="row">
     
          <div class="col-md-4">
            <div class="card mb-3">
                <div class="card-body" id='flux'>
                  <h3 class="card-title">Playlist<br></br>Ranking</h3>
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
                <div class="card-body" id='flux'>
               
        <h3 >Real-Time 
            <br></br>Chart</h3>
      
                 
                </div>
                

                <div class="card-body">
                    <ol class="list-group list-group-numbered">
                    {
                            lastfmList&&lastfmList.slice(0,20).map((l,index)=>(
                                <li key={index} className=" list-group-item ">
                                   
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
                <div class="card-body" id='flux'>
                  <h3 class="card-title" >Pliz Follower Ranking</h3>
                
                </div>
                

                <div class="card-body">
                    <ol class="list-group list-group-numbered">
           
                          {
                            follower&&follower.map((f,index)=>(
                                <li key={index} className=" list-group-item d-flex justify-content-between align-items-center">
                                    {f.name}
                                    <span className="badge bg-primary rounded-pill ">{f.follower}</span> 
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