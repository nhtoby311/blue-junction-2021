import { useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import video from '../assets/video.mp4'

export default function Tutorial(){
    const [playing,setPlaying] = useState(true)
    const videoPlayer = useRef(null)
    console.log(video)

    const handleVideo = (e)=>{
        if (e.playedSeconds > 2){
        setPlaying(false)
        }
    }

    return (
        <>
        <ReactPlayer
                ref = {videoPlayer} 
                playing = {playing}
                className='react-player'
                url={video}
                width='100%'
                onProgress = {(e) =>handleVideo(e)}
            />
        </>
    );
}