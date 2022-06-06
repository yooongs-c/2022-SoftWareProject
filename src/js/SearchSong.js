import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';



function SearchSong() {
    const [songList, setSongList] = useState([])
    const [title, setTitle] = useState('')
    const { id } = useParams();
    const [info, setInfo] = useState()

    const onClickSearchSong = () => {
        fetch('http://34.64.161.129:5000/search-song', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'title': title,
            })
        }).then(res => res.json())
            .then(json => {
                setSongList(json.matches);
                console.log(json.matches)
            })
           
           }

    const getPlaylist = async () => {
        const json = await (
            await fetch(`http://34.64.161.129:5000/playlist-community-id/${id}`)
        ).json();
        console.log(json)
        setInfo(json);
    };
    useEffect(() => {
        getPlaylist();
    }, []);


    const handleTitle = (playlistTitle) => {
        setTitle(playlistTitle.target.value);
    }

   
    return (
        <>
            <div>
                <input type='text' placeholder='검색' value={title} onChange={handleTitle} />
                <button type="submit" onClick={onClickSearchSong} >찾기</button>
            </div>




      <div>
   
                {songList.map((s, index) => (
                    <Song
                        key={index}
                        title={s.title}
                        singer={s.singer}
                    />
                ))}
            </div>
        </>
    )
}


function Song({ title, singer }) {
    const { id } = useParams();
   
    const onClickSong = () => {
        fetch('http://34.64.161.129:5000/song', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'charset': 'utf-8',

            },
            body: JSON.stringify({
                title: title,
                singer: singer,
                id: id,
            })
        })
            .then(res => res.status == 200)
            .then(res => {
                console.log(res)
            })

            document.location.reload();
        
        }

    return (
        <div>
<ul className="list-group" style={{width:500}}>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Title: {title}
    <br></br>
    Singer: {singer}
    <button type="button" className="btn btn-info btn-sm" onClick={onClickSong}>추가</button>
</li>
</ul>


        </div>

    );
}

export default SearchSong;