import styled from "styled-components";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import YouTubeEmbed from "react-youtube-embed";
import ReactPlayer from "react-player";

const PageStyled = styled.div`
  width: 90%;
  height: 1043px;
  margin: 52px 0px 0px 72px;
  border-radius: 4px;
  .player-container {
    width: 75%;
    height: 683.372px;
    border-radius: 15px;
    border: 4px solid #f5841f;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(17.5px);
  }
`;
const playerStyled = {
  width: "75%",
  maxHeight: "683.33px",
  height: "auto",
};
export const VideoPlayerJSX = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [link, setLink] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/admin/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLink(data.listOfVideo);
      });
  }, [id]);
  console.log(course.listOfVideo);

  const linkArray = link.split(",");

  return (
    // <PageStyled>
    //   <h2>{linkArray}</h2>
    //   {linkArray?.map(video => {
    //   <iframe
    //     width="1280"
    //     height="720"
    //     src={video}
    //     title="Marvel Studios&#39; Avengers: Endgame - Official Trailer"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     allowfullscreen
    //   ></iframe>
    //   })}
    // </PageStyled>

    <PageStyled>
      {/* <ul>
        {linkArray.map((linkCom, index) => (
          <li key={index}>
              <YouTubeEmbed id={linkCom} />
          </li>
        ))}
      </ul> */}
      <div className="player-container">
        <ReactPlayer
          width="99%"
          height="99%"
          url={linkArray.map((linkCom, index) => linkCom)}
          controls
        />
      </div>
    </PageStyled>
  );
};
