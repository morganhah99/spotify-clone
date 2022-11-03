import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import React from 'react'
import './SongRow.css'

function SongRow({ track="test" }) {
  return (
    <div className='songRow'>
       <PlayCircleFilledIcon className='songRow__album'/>
      <img className='songRow__album' src={track.album.images[0].url} alt="" />
      <div className='songRow__info'>
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(", ")} -{" "}
        {track.album.name}  
        </p>
      </div>
    </div>
  )
}

export default SongRow
