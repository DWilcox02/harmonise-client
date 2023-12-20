import { useState } from "react";
import LoginButton from "./LoginButton";
// import axios from "axios";
// import { UserProfile } from "../classes/Profile";

const serverURL = "http://localhost:3000"

export default function Home() {
  const url = serverURL + "/login"
  const [user, setUser] = useState<string>();

  async function handleLogin() {
    const popup = window.open(url, "Spotify Login", "width=600,height=600");

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

  return (
    <div>
      <h1>Login to Spotify and Apple Music</h1>
      <p>Logged in as {user}</p>
      <LoginButton handleLogin={handleLogin} />
    </div>
  );
}
