import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchSong from "./SearchSong";

function Playlistdetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState();

  const getPlaylist = async () => {
    const json = await (
      await fetch(`http://34.64.161.129:5000/playlist-community-id/${id}`)
    ).json();
    setInfo(json);
    setLoading(false);
  };
  useEffect(() => {
    getPlaylist();
  }, []);

  console.log(info)
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