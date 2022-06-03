import "./main.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "./Pagination";
import Read from "./read";

function Main() {
  const [write, setWrite] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("http://34.64.161.129:5000/info-community")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setWrite(res.info_community);
      });
  }, []);
  console.log(write);

  const handleWrite = () => {
    document.location.href = "/infocomu/write";
  };

  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>글 번호</th>
            <th>제목</th>
          </tr>
        </thead>
        <label>
          페이지 당 표시할 게시물 수:&nbsp;
          <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>
        <tbody>
          {write.slice(offset, offset + limit).map((w) => (
            <tr key={w.community_id}>
              <td>{w.community_id}</td>
              <Link to={`/info-community-id/${w.community_id}`}>
                <td>{w.title}</td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button type="button" onClick={handleWrite}>
          글쓰기 버튼
        </button>
      </div>
      <div>
        <Pagination
          total={write.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default Main;
