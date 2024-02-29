import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/request'


const Banner = () => {

  const [movie, setMovie] = useState({})
  
  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const req = await axios.get(requests.fetchNowPlaying)
    console.log('req:',req)

    const movieId = req.data.results[ Math.floor(Math.random () * req.data.results.length) ].id
    console.log('movieId', movieId)

    const { data : movieDetail }  = await axios.get(`movie/${movieId}`, {params: { append_to_response: "videos" }} );
    setMovie(movieDetail)
  }

  return (
    <div className='banner' style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      backgroundPosition: 'top center',
      backgroundSize: 'cover'
    }}>
      banner
    </div>
  )
}

export default Banner