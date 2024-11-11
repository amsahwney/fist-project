import { getValidToken } from './spotifyAPI/tokenManager'
import { useState, useEffect } from 'react'
import { pageDataArray as pageData } from './spotifyAPI/page-array'
import { useParams } from 'react-router-dom'
import "./emotions.css" 


function Emotions () {
    const [emotionPlaylist, setEmotionPlaylist] = useState( [] )
    const [playlistImage, setPlaylistImage] = useState( [] )
    const {name: emotion} = useParams()

    const selectPlaylist = pageData.find(page => page.name === emotion)

    // begin playlist fetch
    async function fetchSpotifyTrackData() {
        const token = await getValidToken();

        const response = await fetch(`https://api.spotify.com/v1/playlists/${selectPlaylist.id}/tracks`, {
            headers: {'Authorization': `Bearer ${token}`}
        });

        const data = await response.json();
        setEmotionPlaylist(data.items)
        
    }

    async function fetchSpotifyPlaylistData() {
        const token = await getValidToken();

        const response = await fetch(`https://api.spotify.com/v1/playlists/${selectPlaylist.id}`, {
            headers: {'Authorization': `Bearer ${token}`}
        });

        const data = await response.json();
        setPlaylistImage(data.images) 
    }



    useEffect(()=>{
        fetchSpotifyPlaylistData()
        fetchSpotifyTrackData()
    }, [selectPlaylist])

    // begin page display return
    return (
        <div className="background-img" style={{ backgroundImage: `url(${selectPlaylist.image})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',        
        height: '100vh',}}>

        <div className="playlist-container">  
            {playlistImage.length && (
            <a className='playlist-cover' href={`https://open.spotify.com/playlist/${selectPlaylist.id}`}>
                <img src={playlistImage[0].url}/>
                <p>click here for a complete playlist</p>
            </a>
            )}
            
            <ul>
                {emotionPlaylist.slice(0, 3).map((trackItem, index) => (
                    <li key={index} className = "track">
                        
                        <img src={trackItem.track.album.images[0]?.url} width="64" height="64"/>
                        
                        <div className='track-info'>
                            <h3>{trackItem.track.name}</h3>
                            <p>{trackItem.track.artists.map(artist => artist.name).join(', ')}</p>
                        </div>

                        {trackItem.track.preview_url && (
                        <audio controls>
                            <source src={trackItem.track.preview_url} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    )}
                    </li>
                ))}
            </ul>
        </div>
        
        </div>
      )

}

export default Emotions 
