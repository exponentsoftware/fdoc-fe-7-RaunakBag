import React from "react";
import "./Album.css";

function Album(props) {
  const { id, image, title, artist, song, deleteAlbum } = props;
  return (
    <div className="album" id={id ? id : ""}>
      <img src={image} alt={title} />
      <div className="col1">
        <h1>{title}</h1>
        <a href=" ">{artist}</a>
          <a href={song}>
            <button>Play</button>
          </a>
        <button
          onClick={(e) => {
            deleteAlbum(e, id);
          }}
        >
          Delete Album
        </button>
      </div>
    </div>
  );
}

export default Album;
