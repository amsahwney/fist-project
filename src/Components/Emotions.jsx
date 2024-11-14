import { getValidToken } from './spotifyAPI/tokenManager'
import { useState, useEffect } from 'react'
import { pageDataArray as pageData } from './spotifyAPI/page-array'
import { exerciseArray as exercises } from '../exercise-array'
import { useParams } from 'react-router-dom'
import weatherIcon from '../assets/weather-icon.svg';
import "./emotions.css" 


function Emotions () {
    const [emotionPlaylist, setEmotionPlaylist] = useState( [] )
    const [playlistImage, setPlaylistImage] = useState( [] )
    const [weatherData, setWeatherData] = useState( {} )
    const {name: emotion} = useParams()

    const selectPlaylist = pageData.find(page => page.name === emotion)
    const selectExercise = exercises.find(exercise => exercise.emotion === emotion)

// fetching spotify tacks
    async function fetchSpotifyTrackData() {
        const token = await getValidToken();

    try{
        const response = await fetch(`https://api.spotify.com/v1/playlists/${selectPlaylist.id}/tracks`, {
            headers: {'Authorization': `Bearer ${token}`}
        });

        const data = await response.json();
        if (response.ok){
        setEmotionPlaylist(data.items)
        }

    } catch (error) {
        console.error(`Error fetching weather data: ${response.status}`)
    }   
    }

// fetching spotify playlists
    async function fetchSpotifyPlaylistData() {
        const token = await getValidToken();

    try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${selectPlaylist.id}`, {
            headers: {'Authorization': `Bearer ${token}`}
        });

        const data = await response.json();
        setPlaylistImage(data.images) 

    } catch (error){
        console.error(`Error fetching weather data:${response.status}`)
    }
}

// fetching weather data 
    async function fetchWeatherData(){
        const weatherKey = import.meta.env.VITE_WEATHER_KEY

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude
                const lon = position.coords.longitude

                try{
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=imperial`)
                    const data = await response.json();
                    setWeatherData(data)

                } catch (error) {
                    console.error("Error fetching weather data:", error)
                }

            }, (error) => {
                console.error("Error getting location:", error)
            })

        } else {
            console.error("Geolocation is not supported by this browser")
        }  
    }

// loading all fetches on page
    useEffect(()=>{
        fetchSpotifyPlaylistData()
        fetchSpotifyTrackData()
        fetchWeatherData()
    }, [selectPlaylist])


    // begin page display return
    return (
        <div className="background-img" style={{ backgroundImage: `url(${selectPlaylist.image})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',        
        height: '100vh',}}>

        <h1 className='page-title'> when you're feeling {selectPlaylist.name}...</h1>

{/* rendering all spotify data */}
        <div className="playlist-container">  
            {playlistImage.length && (
            <a className='playlist-cover' href={`https://open.spotify.com/playlist/${selectPlaylist.id}`}>
                <img src={playlistImage[0].url}/>
                <p>click here and login for a personal playlist</p>
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

<div className='flexbox'>
{/* rendering the breathing exercises */}
      <div className='wellness'>
        <h2>a breathing exercise</h2>
        <ul>
          <li>
            <h3>{selectExercise.name}</h3>
            <p>{selectExercise.description}</p>
            <p>Inhale: {selectExercise.inhale}s, Hold: {selectExercise.hold}s, Exhale: {selectExercise.exhale}s</p>
            <p>Cycles: {selectExercise.cycles}</p>
          </li>
        </ul>
      </div>

 {/* rendering the weather data */}
      <div className='weather-card'> 
        <h2>consider {selectPlaylist.consider}</h2>
        <img src={weatherIcon} />
        <ul>
            <li>
            {weatherData.name && (
                <div className='weather-report'>
                <h3>weather in {weatherData.name.toLowerCase()}:</h3>
                <p>{weatherData.weather[0].description}</p>
                <p> temp: {Math.round(weatherData.main.temp)} °F </p> 
                <p> feels like: {Math.round(weatherData.main.feels_like)} °F</p>
                </div>
            )}
            </li>
        </ul>
      </div>
    </div>
        
        </div>
      )

}

export default Emotions 
