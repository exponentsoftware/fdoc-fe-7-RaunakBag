import React, { useState, useRef } from "react";
import "./AddAlbum.css";


function AddAlbum(props) {
  const fileInputRef = useRef();
  const { albums, setAlbums } = props;
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const onSelectFile = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files.length > 0) {
        setImage(URL.createObjectURL(e.target.files[0]));
      }
    }
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setAlbums([
      ...albums,

      {
        id: new Date().getTime().toString(),
        artist: artist,
        title: title,
        image: image,
      },
    ]);
    setArtist("");
    setTitle("");
    setImage("");
  };

  return (
    <div>
      <h3> Add Album</h3>
      <br />
      <br />
      <form
        onSubmit={(e) => {
          onsubmit(e);
        }}
      >
        <label>Album Title </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        ></input>
        <br />
        <br />
        <label>Artist Name </label>
        <input
          type="text"
          value={artist}
          onChange={(e) => {
            setArtist(e.target.value);
          }}
          required
        ></input>
        <br />
        <br />
        <label>Album Cover </label>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => {
            onSelectFile(e);
          }}
          required
        ></input>
        <br />
        {image && <img src={image} alt="image1" />}

        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddAlbum
