import React, { useEffect, useState } from "react";
import "./App.css";
import AddAlbum from "./components/AddAlbum/AddAlbum";
import Albums from "./components/Albums/Albums";
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Album from "./components/Album/Album";
import Categories from "./components/Categories/Categories"
import Playlist from "./components/Playlist/Playlist"
import Songs from "./components/Songs/Songs";
import Protected from "./components/Login/Protected";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import DataList from "./components/APIData/Data"



function App() {
  const [albums, setAlbums] = useState([
    {
      id: 1,
      image:
        "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Rockstar-Poster-Feature-306x393.jpg",
      title: "Rockstar",
      artist: "A.R Rahman",
      song: "https://www.youtube.com/watch?v=cB-ZRijjIMY",
    },
    {
      id: 2,
      image:
        "https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/75594307-306x393.jpg",
      title: "Highway",
      artist: "A.R Rahman",
      song: "https://www.youtube.com/watch?v=4hK8nmvAUnA",
    },
    {
      id: 3,
      image:
        "https://www.filmibeat.com/img/popcorn/movie_posters/raanjhnaa-20130513121300-11303.jpg",
      title: "Ranjhanna",
      artist: "A.R Rahman",
      song: "https://www.youtube.com/watch?v=rM2FLFfIVxo",
    },
    {
      id: 4,
      image: "https://upload.wikimedia.org/wikipedia/en/0/0e/Jodhaa_akbar.jpg",
      title: "Jodha Akbar",
      artist: "A.R Rahman",
      song: "https://www.youtube.com/watch?v=ve4IQMlTMuY",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/08/Rang_De_Basanti_poster.jpg",
      title: "Rang De Basanti",
      artist: "A.R Rahman",
      song: "https://www.youtube.com/watch?v=Exrs85DTD0A",
    },
    {
      id: 6,
      image:
        "https://cdn.cinematerial.com/p/297x/iajmjaap/jannat-indian-movie-poster-md.jpg?v=1456298328",
      title: "Jannat",
      artist: "Pritam",
      song: "https://www.youtube.com/watch?v=eESg95AqmbA",
    },
    {
      id: 7,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Bharat_film_poster.jpg/220px-Bharat_film_poster.jpg",
      title: "Bharat",
      artist: "Vishal–Shekhar",
      song: "https://www.youtube.com/watch?v=98iFfw0n-Q8",
    },
  ]);

  const deleteAlbum = (e, id) => {
    e.preventDefault();
    for (let i = 0; i < albums.length; i++) {
      if (albums[i].id === id) {
        albums.splice(i, 1);
        console.log(albums, "remain");
      }
    }
  };

  useEffect(() => {
    setAlbums(albums);
  }, [albums]);
  return (
    <div className="App">
     <Router>
          <Navbar />
          <Route path="/" exact component={Login}></Route>
        <Protected exact path="/categories" component={Logout} />
          <Route path="/" exact component={Categories}></Route>
          <Route path="/album" ><Albums albums={albums} deleteAlbum={deleteAlbum} /></Route>
          <Route path="/add" component={AddAlbum} />
          <Route path = "/playlist/:id" component = {Songs} />
        </Router>
        {/* <Albums albums={albums} deleteAlbum={deleteAlbum} />
      <AddAlbum setAlbums={setAlbums} albums={albums} /> */}
      <DataList/>
    </div>
  );
}

export default App;