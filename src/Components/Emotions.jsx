import { getValidToken } from './spotifyAPI/tokenManager'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Emotions () {
    const [emotionPlaylist, setEmotionPlaylist] = useState( [] )
    const params = useParams()

    // begin playlist fetch
    async function fetchSpotifyData() {
        const token = await getValidToken();

        const response = await fetch(`https://api.spotify.com/v1/playlists/${params.id}/tracks`, {
            headers: {'Authorization': `Bearer ${token}`}
        });

        const data = await response.json();
        setEmotionPlaylist(data.items)
        console.log(emotionPlaylist)
    }

    useEffect(()=>{
        fetchSpotifyData()
    }, [])

    // begin page display return
    return (
        <>

        </>
      )

}

export default Emotions 
