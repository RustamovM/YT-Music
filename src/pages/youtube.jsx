import React from "react";
import Header from "../components/header/header";
import Video from "../components/main-video/video";
import YoutubeProvide from "../context/youtube-contetx";

export const Youtube = () => {
  return (
    <>
      <YoutubeProvide>
        <Header />;
        <Video />
      </YoutubeProvide>
    </>
  );
};

export default Youtube;
