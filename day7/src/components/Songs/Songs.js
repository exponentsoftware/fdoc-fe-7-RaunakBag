import React from 'react'
import "./Songs.css"


function Songs() {
    
    return (
        <div className="playlistPage">
        <div className="mainInner">
          <div className="playlistPageInfo">
            <div className="playlistPageImage">
              <img
                src="https://i.scdn.co/image/ab67616d0000b27385f9dd07c2a38292e0efe2fa"
                alt="pic"
              />
            </div>
            <div className="playlistPageContent">
              <p className="smallText uppercase bold">Play List</p>
              <h1>Top 50</h1>
  
              <p className="tagline">
                Top 50 songs of all languages Bengali, Hindi, English...
              </p>
              <div className="playlistPageDesc">
                <p className="spotify">Spotify</p>
                <span>299,428 likes</span>
                <span>2hr 35 min</span>
              </div>
            </div>
          </div>
          <div className="playlistPageSongs">
            <div className="playlistButtons">
              <span className="playIcon">
                
              </span>
              <div className="icons">
                <div className="icon-iconsHeart">
                  
                </div>
                <div className="icon-iconsDots"></div>
              </div>
            </div>
  
            <ul className="songList">
              <li>
                <div className="songIcon">
                  
                </div>
                <div className="songDetails">
                  <h3>Faded</h3>
                  <span>Alan Walker</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  
                </div>
                <div className="songDetails">
                  <h3>Fearless Pt. II</h3>
                  <span>Lost Sky, Chris Linton</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  
                </div>
                <div className="songDetails">
                  <h3>Superhero</h3>
                  <span>Unknown Brain, Chris Linton</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  
                </div>
                <div className="songDetails">
                  <h3>Heros Tonight</h3>
                  <span>Janji, Johnning</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                  
                </div>
                <div className="songDetails">
                  <h3>Burj Khalifa</h3>
                  <span>Shashi - Dj Khushi</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
              <li>
                <div className="songIcon">
                
                </div>
                <div className="songDetails">
                  <h3>Hold On</h3>
                  <span>Justin Bieber</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Songs
