import React from "react";
import Playlists from "../Playlist/Playlist";
import "./Categories.css";

function Categories() {
  const dataCategories = [
    {
      id: 1,
      name: "Top 50",
      tagline: "The top tracks in India",
    },
    {
      id: 2,
      name: "Top Hits Bengali",
      tagline: "Tune into the top Bengali songs",
    },
    {
      id: 3,
      name: "Top Hits Hindi",
      tagline: "Tune into the top Hindi songs",
    },
    {
      id: 4,
      name: "Top Hits English",
      tagline: "Tune into the top English songs",
    },
  ];
  return (
    <div className="mainInner">
      {dataCategories.map((category, id) => (
        <div className="cardsWrap" key={id}>
          <h2>{category.name}</h2>
          <p className="subText">{category.tagline}</p>
          <Playlists category_id={category.id} />
        </div>
      ))}
    </div>
  );
}

export default Categories;
