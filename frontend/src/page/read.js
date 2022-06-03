import React, { useEffect, useState } from "react";
import ReadDetail from "./readDetail";
import "./post.css";

function Read() {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const json = await (
      await fetch(`http://34.64.161.129:5000/info-community`)
    ).json();
    const desc = json.info_community;
    setData(desc);
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleList = () => {
    document.location.href = "/infocomu";
  };

  return (
    <>
      {data.map((p) => (
        <div key={p.community_id}>
          {data ? (
            <ReadDetail
              id={p.community_id}
              num={p.community_id}
              title={p.title}
              content={p.content}
            />
          ) : (
            "해당 게시글을 찾을 수 없습니다."
          )}{" "}
        </div>
      ))}

      <button className="post-view-go-list-btn" onClick={handleList}>
        목록으로 돌아가기
      </button>
    </>
  );
}

export default Read;

/*
{write.slice(offset, offset + limit).map((w) => (
    <tr key={w.id}>
      <td>{w.id}</td>
      <Link to={`/info-community-id/${w.id}`}>
        <td>{w.title}</td>
      </Link>
    </tr>
  ))}

{data.map((p) => (
    <div key={p.community_id}>

    </div>
) )
*/
