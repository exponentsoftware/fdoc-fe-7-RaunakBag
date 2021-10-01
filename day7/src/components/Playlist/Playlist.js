import React from "react";
import { Link } from "react-router-dom";
import "./Playlist.css";

function Playlist(props) {
  console.log(props.limiter);
  const dataPlaylist = [
    {
      id: 101,
      category_id: 3,
      name: "Top Hits Hindi",
      img: "https://i.scdn.co/image/ab67616d0000b273348468c203278d510f0cbc5a",
      desc: "Description",
    },
    {
      id: 102,
      category_id: 3,
      name: "Trending Hindi",
      img: "https://i.scdn.co/image/ab67616d0000b2731a6d8342d05daf63cb360021",
      desc: "Description",
    },
    {
      id: 103,
      category_id: 3,
      name: "Motivation",
      img: "https://i.scdn.co/image/ab67616d0000b273c34d715d5ebccd6b155abbaa",
      desc: "Description",
    },
    {
      id: 104,
      category_id: 1,
      name: "Top 50 Songs",
      img: "https://ih1.redbubble.net/image.1024299725.4004/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg",
      desc: "Description",
    },
    {
      id: 105,
      category_id: 4,
      name: "Top Hits Hollywood",
      img: "https://i.scdn.co/image/ab67616d0000b27385f9dd07c2a38292e0efe2fa",
      desc: "Description",
    },
    {
      id: 105,
      category_id: 4,
      name: "Top Hits Hollywood",
      img: "https://i.scdn.co/image/ab67616d0000b27385f9dd07c2a38292e0efe2fa",
      desc: "Description",
    },
    {
      id: 106,
      category_id: 2,
      name: "Top Hits Bengali",
      img: "https://i.scdn.co/image/ab67616d0000b273576284ef91dc2258721c81fa",
      desc: "Description",
    },
    {
      id: 107,
      category_id: 2,
      name: "Bengali Melody",
      img: "https://i.scdn.co/image/ab67616d0000b273b2b7e640efe991b80668cdcc",
      desc: "Description",
    },
    {
      id: 107,
      category_id: 2,
      name: "Bengali Melody",
      img: "https://i.scdn.co/image/ab67616d0000b273b2b7e640efe991b80668cdcc",
      desc: "Description",
    },
  ];

  let matchedPlaylist = dataPlaylist
    .filter((playlist) => playlist.category_id === props.category_id)
    .slice(0, props.limiter);
  return (
    <div className="cardsWrapInner">
      {matchedPlaylist.map((playlist, id) => (
        <Link to={`/playlist/` + playlist.id} key={id}>
          <div className="card" key={id}>
            <div className="cardImage">
              <img src={playlist.img} alt="Pic 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <span>{playlist.desc}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Playlist;
