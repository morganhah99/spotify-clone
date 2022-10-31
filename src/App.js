import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi(); //Responsible for any interaactions between react app and spotify

function App() {

  const [token, setToken] = useState(null);
  
  // Runs code based on a given condition, usually a function. if you want it to run once, you add [] ex: }, []);
  useEffect(() => {
    const hash = getTokenFromUrl(); //takes accesstoken of user into a hash variable after user authenticates itself using spotify api

    window.location.hash = ""; 

    const _token = hash.access_token;

    if (_token) {
      setToken(_token); //token is stored here in as a state

      spotify.setAccessToken(_token); //access token is given to this method to communicate between the app and spotify (connects spotify to react)

      spotify.getMe().then(user => { //pulls user information from spotify api (username, how many followers, uri, etc)
        console.log(user);
      });

    }

    console.log('I have a token ' , token);
  }, []);

  return (
    <div className="app">
      {
        token ? (                  // if there is a token present then the first block of code will be executed, otherwise render the login component
          <h1>I am logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
