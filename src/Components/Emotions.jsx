import { getValidToken } from './spotifyAPI/tokenManager';



async function fetchSpotifyData() {
    const token = await getValidToken();

    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();
    return data;
}