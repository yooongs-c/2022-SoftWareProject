
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import styled from "styled-components";
//import Pagination from "./Pagination";
//import Read from "./read";

function InfoCommunity() {
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
   // <Layout>
   <div>
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col" id='info_id'>글 번호</th>
      <th scope="col">제목</th>
      <th scope="col">작성자</th>
    </tr>
  </thead>
  <tbody>
  {write.slice(offset, offset + limit).map((w) => (
            <tr class ='table-active' key={w.community_id}>
              <th scope='row'>{w.community_id}</th>
              <a href={`/info-community-id/${w.community_id}`}>
              <td >{w.title}</td>
              </a>
              <td>{w.user_name}</td>
            </tr>
          ))}
  </tbody>
</table>
<div>
        <button type="button" onClick={handleWrite}>
          글쓰기 버튼
        </button>
      </div>
      </div>
  //  </Layout>
  );
}
/*
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;
*/
export default InfoCommunity;
