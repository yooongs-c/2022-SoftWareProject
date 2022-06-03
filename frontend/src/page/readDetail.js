import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ReadDetail({ id, num, title, content }) {
  return (
    <div>
      <Link to={`/info-community-id/${id}`} />

      <h2 align="center">게시글 상세정보</h2>
      <div className="post-view-wrapper">
        <>
          <div className="post-view-row">
            <label>게시글 번호</label>
            <label>{num}</label>
          </div>
          <div className="post-view-row">
            <label>제목</label>
            <label>{title}</label>
          </div>
          <div className="post-view-row">
            <label>내용</label>
            <div>{content}</div>
          </div>
        </>
      </div>
    </div>
  );
}
export default ReadDetail;
