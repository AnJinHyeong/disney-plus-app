import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/request'

import './Banner.css'


const Banner = () => {

  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const req = await axios.get(requests.fetchNowPlaying)
    const movieId = req.data.results[ Math.floor(Math.random () * req.data.results.length) ].id
    const { data : movieDetail }  = await axios.get(`movie/${movieId}`, {params: { append_to_response: "videos" }} );
    setMovie(movieDetail)
  }

  const truncate = (str, n) => {
    if(!str) return
    return str.length > n ? str.substring(0, n) + "..." : str;
  }

  return (
    <div className='banner' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")` }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>
          { movie.title || movie.name || movie.original_name }
        </h1>

        <div className='banner__buttons'>
          {movie?.videos?.results[0]?.key && 
            <button className='banner_button play'>
              Play
            </button>
          }
        </div>
        <p className='banner__description'>
          {truncate(movie.overview, 100)}
        </p>
      </div>
      <div className='banner--fadeBottom'></div>
    </div>
  )
}

export default Banner