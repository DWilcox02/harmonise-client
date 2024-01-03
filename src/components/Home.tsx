import { useState } from "react";
import LoginButton from "./LoginButton";
import PlaylistsButton from "./PlaylistsButton";
import axios from "axios";
import { Playlist } from "../classes/Playlist";
// import axios from "axios";
// import { UserProfile } from "../classes/Profile";

const serverURL = "http://localhost:3000"

export default function Home() {
  
  const [user, setUser] = useState<string>();
  const [playlists, setPlaylists] = useState<Playlist[]>();

  async function handleLogin() {
    const loginUrl = serverURL + "/login"
    const popup = window.open(loginUrl, "Spotify Login", "width=600,height=600")

    window.addEventListener("message", (event) => {
      if (event.origin === serverURL) {
        const { display_name } = event.data;
        console.log(event)
        setUser(display_name);
      }

      if (!popup?.closed) {
        popup?.close();
      }
    })
  }

  async function handlePlaylists() {
    console.log("Requesting playlists")
    const playlistUrl = serverURL + "/playlists"
    const response = await axios.get(playlistUrl)
    setPlaylists(response.data as Playlist[])
  }

  return (
    <div>
      <h1>Login to Spotify and Apple Music</h1>
      <p>Logged in as {user}</p>
      <LoginButton handleLogin={handleLogin} />
      {(user != undefined) && (
        <div>
          <PlaylistsButton handleClick={handlePlaylists}/>
        </div>
      )}
      <h2>Playlists:</h2>
      <div>
        {playlists?.map(pl => (
          <div>
            {pl.name}
            <img src={pl.image?.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
