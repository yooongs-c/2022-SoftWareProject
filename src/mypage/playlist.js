import React from "react";
import { useState, useEffect} from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import albumcover from '../img/0.jpeg';


function Playlist(){

    const [songs, setSongs] =useState([]);
    const playlist = {

    }
    useEffect(() => {
      fetch(
        `https://ws.audioscrobbler.com/2.0/?method=track.search&track=DOPE&api_key=0c03b570616d31bc72764253ad12993b&format=json`)
      .then((reponse) => reponse.json())
      .then((json)=>console.log(json.results.trackmatches.track));
    },[]);

    return(
        <div>
            
            {
/*
                songs.map(
                    song => <div key = {song.mbid}>
                    {song.artist}</div>
                )
                */
                <Card  style={{ width: '400px', bg: 'secondary' }}>
                <Card.Img variant="top" src={albumcover} />
                <Card.Body>
                  <Card.Title>Fly Me to the Moon</Card.Title>
                  <Card.Text>
                    하늘을 나는 것 같아
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>song1</ListGroupItem>
                  <ListGroupItem>song2</ListGroupItem>
                  <ListGroupItem>song3</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="/playlist">playlist</Card.Link>
                  <Card.Link href="/community">community</Card.Link>
                </Card.Body>
              </Card>
            }  
        </div>
    );

}

export default Playlist;