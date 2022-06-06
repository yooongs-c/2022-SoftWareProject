import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PlaylistCard from './PlaylistCard';


function MakePlaylist() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [playlist, setPlaylist] = useState([]);
    const [userId, setUserId] = useState();

 
    const handleTitle = (event) => {
        console.log(event)
        setTitle(event.target.value)
    }

    const handleDescription = (event) => {
        console.log(event)
        setDescription(event.target.value)
    }

    const onClickPost = () => {
        fetch('http://34.64.161.129:5000/playlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem('login-token')
            },
            body: JSON.stringify({
                'title': title,
                'description': description,
            })
        })
            .then(res => res.json())
            .then(() => {
                alert('플레이리스트가 등록되었습니다.')
                document.location.href = '/makeplaylist'
            })
     }

    useEffect(() => {
        fetch('http://34.64.161.129:5000/playlist-community')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setPlaylist(json.playlist_community)
            });
        },[])
        
    useEffect(() => {
        fetch('http://34.64.161.129:5000/my-info', {
            headers: {
                "Authorization": localStorage.getItem('login-token')
            }
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setUserId(json.user_id)

            });
    },
        []
    )

   
    return (

            

            <div className="container">
                <div className='row'>
                <div style={{ display: 'inline-block' }}>
                <from>
                    <div class="form-group">
                        <input class="form-control form-control-lg" type="text" placeholder="플레이리스트 제목" value={title} onChange={handleTitle} id="inputLarge" />
                    </div>
                    <div>
                        <input class="form-control form-control-lg" type="text" placeholder="플레이리스트 설명" value={description} onChange={handleDescription} id="inputLarge" />
                    </div>
                </from>
                <div id='pli_reg_btn'>
                    <button  type='button' onClick={onClickPost} class="btn btn-secondary">등록</button>
                </div>
             </div> 
                </div>


            <p></p>

                <div className="row" >
                    {playlist.map((pl, index) => (
                        pl.user_id === userId &&
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

    );
}

export default MakePlaylist;