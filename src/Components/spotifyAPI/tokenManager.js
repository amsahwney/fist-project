import { getSpotifyToken } from './fetchToken.js'

let token = null
let expirationTime = null

export async function getValidToken() {
    const now = new Date().getTime();
    
    if (!token || now >= expirationTime) {
        const newToken = await getSpotifyToken();
        token = newToken;
        expirationTime = now + 3600 * 1000; 
    }

    return token;
}