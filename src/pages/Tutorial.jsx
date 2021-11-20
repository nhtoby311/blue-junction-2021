import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import video from '../assets/video.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'
import styled from 'styled-components';
import Point from '../components/Point/Point';
import Modal from '../components/Modal/Modal';


const questions = [
    {
        id:1,
        video: video,
        points:[
            {
                nextVidId: 2,
                description: "Use the soap" ,
                pos:{
                    top:"17vw",
                    left:"27vw", 
                }
            },
            {
                nextVidId: 2,
                description: "Use the faucet",
                pos:{
                    top:"20vw",
                    left:"50vw", 
                }
            }
        ]
    },
    {
        id:2,
        video: video2,
        points:[
            {
                nextVidId: 3,
                description: "Wash the hands",
                pos:{
                    top:"34vw",
                    left:"35vw", 
                }
            }
        ]
    },
    {
        id:3,
        video: video3,
        points:[
            {
                nextVidId: 4,
                description: "Use the soap" ,
                pos:{
                    top:"17vw",
                    left:"27vw", 
                }
            },
            {
                nextVidId: 4,
                description: "Close the faucet",
                pos:{
                    top:"20vw",
                    left:"50vw", 
                }
            }
        ]
    },
    {
        id:4,
        video: video4,
        points:[
            {
                nextVidId: 5,
                description: "Use the soap" ,
                pos:{
                    top:"17vw",
                    left:"27vw", 
                }
            },
            {
                nextVidId: 5,
                description: "Use the faucet",
                pos:{
                    top:"20vw",
                    left:"50vw", 
                }
            }
        ]
    },
]




export default function Tutorial(){
    const [playing,setPlaying] = useState(true)
    const [videoIndex,setVideoIndex] = useState(1)
    const [active,setActive] = useState(false)
    const [modal,setModal] = useState(false)
    const videoPlayer = useRef(null)


    const handleVideo = (e)=>{
        setPlaying(true)
        setActive(false)
        setVideoIndex(e)
    }

    const fetchVideo = ()=>{
        let res = ''
        if (videoIndex < 5){
            res = questions.find((e)=>{
                return e.id === videoIndex
            }).video
        }
        return res
    }

    const handleActive = () => {
        if(active){
            console.log('sds')
            return 'active'
        }
        else{
            return
        }
    }

    const fetchPoint = ()=>{
        let res = []
        if (videoIndex < 5){
            res = questions.find((e)=>{
                return e.id === videoIndex
            }).points
        }
        
        
        return res.map((e)=>{return <Point className={handleActive()}
        descrip = {e.description} 
        top={e.pos.top} left={e.pos.left} 
        func={()=>{
            if (videoIndex < 4){
                handleVideo(e.nextVidId)
            }
            else{
                setModal(true)
            }}}></Point>})
    }
    

    return (
        <>
        {/* <Image src={img}/> */}
        
        <ReactPlayer
            muted
            ref = {videoPlayer} 
            playing = {playing}
            className='react-player'
            url={fetchVideo()}
            width='100vw'
            height= 'auto'
            onEnded={()=>{setActive(true)}}
        />

        {fetchPoint()}

        {modal === true ? (<Modal/>) : null}
        </>
    );
}