import { getSpotifyToken } from './fetchToken.js';

let token = null;
let expirationTime = null;
let tokenPromise = null;

// Check if a token exists in localStorage
function loadStoredToken() {
    const storedToken = localStorage.getItem("spotify_access_token");
    const storedExpiration = localStorage.getItem("spotify_token_expiration");

    if (storedToken && storedExpiration) {
        token = storedToken;
        expirationTime = parseInt(storedExpiration, 10);
    }
}

// Call the function to load the token on script execution
loadStoredToken();

export async function getValidToken() {
    const now = Date.now();

    // Use cached token if it's still valid
    if (token && now < expirationTime) {
        console.log("Using cached token");
        return token;
    }

    // Prevent multiple concurrent requests
    if (tokenPromise) {
        console.log("Waiting for ongoing token request");
        return tokenPromise;
    }

    console.log("Fetching new token...");
    tokenPromise = getSpotifyToken()
        .then(({ accessToken, expiresIn }) => {
            token = accessToken;
            expirationTime = now + expiresIn;
            
            // Store token in localStorage
            localStorage.setItem("spotify_access_token", token);
            localStorage.setItem("spotify_token_expiration", expirationTime.toString());

            tokenPromise = null; // Reset promise after completion
            console.log("New token stored:", token);
            return token;
        })
        .catch(error => {
            tokenPromise = null; // Reset on error
            console.error("Token fetch failed:", error);
            throw error;
        });

    return tokenPromise;
}
