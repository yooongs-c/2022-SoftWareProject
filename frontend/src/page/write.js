import React, { useState, useEffect } from "react";
import axios from "axios";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //인풋 변화 있을 때마다  valur 값 변경
  const handleTitle = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const onClickPost = () => {
    fetch("http://34.64.161.129:5000/community", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("login-token"),
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.access_token);
        if (res.access_token) {
          localStorage.setItem("login-token", res.access_token);
        }
      })
      .then(() => {
        alert("글이 등록되었습니다.");
        document.location.href = "/infocomu";
      });
  };

  useEffect(() => {
    axios
      .get("http://34.64.161.129:5000/community")
      .then((res) => console.log(res))
      .catch();
  }, []);

  return (
    <div className="Write">
      <div>
        <input
          type="text"
          id="title_txt"
          placeholder="제목"
          value={title}
          onChange={handleTitle}
        />
      </div>

      <div>
        <textarea
          id="content_txt"
          placeholder="내용을 입력하세요."
          value={content}
          onChange={handleContent}
        ></textarea>
      </div>

      <div>
        <button type="button" onClick={onClickPost}>
          게시글 등록
        </button>
      </div>
    </div>
  );
}

export default Write;
