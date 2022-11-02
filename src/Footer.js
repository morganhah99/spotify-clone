import React from 'react'
import "./Footer.css"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from "@mui/material";

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__left">
          <p>Album and song details</p>
        </div>

        <div className='footer__center'>
          <ShuffleIcon classname="footer__green" />
          <SkipPreviousIcon classname="footer__icon" />
          <PlayCircleFilledWhiteOutlinedIcon classname="footer__icon" />
          <SkipNextIcon className='footer__icon' />
          <RepeatIcon className='footer__green' />
        </div>

        <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>


    </div>
  )
}

export default Footer  