import React, {useEffect, useState} from "react";
import "./Albums.css";
import Album from "../Album/Album";


function Albums(props) {
  const { albums, deleteAlbum } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => setSearchTerm(e.target.value);

  useEffect(() => {
    const results = albums.filter(o => o.title.includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);


  useEffect(() => {}, [albums]);
    return (<>
      <div className=" search">
        <label>Search </label>
          <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="search"
      />
      <p>
        searchTerm:
        <br />
        {searchTerm.id}
      </p>
      <div className="results">
        <ul>
          {searchResults &&
            searchResults.map(item => <li key={item.id}></li>)}
        </ul>
      </div>
        </div>
       <div className="albums_container">
       {albums &&
        albums.map((item, index) => (
          <div key={index}>
            <Album
             id={item.id}
              artist={item.artist}
              title={item.title}
              image={item.image}
              song={item.song}
              deleteAlbum={deleteAlbum}
            />
          </div>
        ))}
    </div>
    </>
    )
}

export default Albums
