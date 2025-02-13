export async function getSpotifyToken() {
    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    
    if (!client_id || !client_secret) {
        console.error("Missing Spotify Client ID or Secret");
        return;
    }

    const credentials = btoa(`${client_id}:${client_secret}`);

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${credentials}`
            },
            body: 'grant_type=client_credentials'
        });

        const data = await response.json();
        console.log("Spotify Token Response:", data);

        if (!response.ok) {
            throw new Error(`Failed to fetch token: ${data.error || data.error_description}`);
        }

        return { accessToken: data.access_token, expiresIn: data.expires_in * 1000 };
    } catch (error) {
        console.error("Error fetching Spotify token:", error);
    }
}
