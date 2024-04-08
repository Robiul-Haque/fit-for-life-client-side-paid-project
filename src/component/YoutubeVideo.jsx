import React from "react";

const YoutubeVideo = ({ url, title }) => {
  return (
    <iframe
      src={url}
      title={title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      className="rounded md:w-96 w-80 h-56"
    ></iframe>
  );
};

export default YoutubeVideo;
