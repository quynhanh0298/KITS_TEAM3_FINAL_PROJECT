import styled from "styled-components";
import React from "react";
import { Player } from "video-react";
import "../../../../node_modules/video-react/dist/video-react.css";

const PageStyled = styled.div`
  width: 90%;
  margin: 52px 0px 0px 72px;
`;

export const VideoPlayer = () => {
  return (
    <PageStyled>
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/TcMBFSGVi1c"
        title="Marvel Studios&#39; Avengers: Endgame - Official Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </PageStyled>
  );
};
