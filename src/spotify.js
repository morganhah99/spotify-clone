//1. Click Login button
//2. call spotify's authroization api to authroize user
//3. Redirect user back to home page once authorizsed by spotify

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "39de5719de1a429889c2515fe939fc43";

//scopes are permissions for users set by spotify. (current user doesn't have permission to remove songs but they have permission to read)
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&showdialog=true`;
