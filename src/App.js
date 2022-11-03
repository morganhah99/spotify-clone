import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi(); //Responsible for any interaactions between react app and spotify allows us to connect the react app to spotify

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();
  
  // Runs code based on a given condition, usually a function. if you want it to run once, you add [] ex: }, []);
  useEffect(() => {

    const hash = getTokenFromUrl(); //takes accesstoken of user into a hash variable after user authenticates itself using spotify api

    window.location.hash = ""; 

    const _token = hash.access_token;

    document.title = 'Spotify';

    if (_token) {
      dispatch({   
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token); // access token is given to this method to communicate between the app and spotify (connects spotify to react)

      spotify.getMe().then(user => { // pulls current user information from spotify api (username, how many followers, uri, etc)

        dispatch({   //dispatch will pop in the user right into the data layer afterwards pull the data layer and reading it 
          type: 'SET_USER',
          user: user,
        })
      });
      
      spotify.getUserPlaylists().then((playlists)=> {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      })

      spotify.getPlaylist('6SjfnQs2m8zFiqFMgJPX6r').then(response =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
        );

    }

  }, []);


  return (
    <div className="app">
      {
        token ? (     // if there is a token render player, otherwise render the login component
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
