import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import video from '../assets/video.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'
import video5 from '../assets/video5.mp4'
import video6 from '../assets/video6.mp4'
import video7 from '../assets/video7.mp4'
import video8 from '../assets/video8.mp4'
import video9 from '../assets/video9.mp4'
import video10 from '../assets/video10.mp4'
import Point from '../components/Point/Point';
import Modal from '../components/Modal/Modal';
import styled from 'styled-components';


//5 = use soap

const questions = [
    {
        id:1,
        video: video,
        description: "What would be the next step?",
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
        description: "What would you do next?",
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
        description: "Come on, go ahead.",
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
        description: "What would be the next step?",
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
        id:5,
        video: video5,
        description: "What would be the next step?",
        points:[
            {
                nextVidId: 6,
                description: "Rub the soap",
                pos:{
                    top:"40vw",
                    left:"67vw", 
                }
            }
        ]
    },
    {
        id:6,
        video: video6,
        description: "What would be the next step?",
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
                nextVidId: 7,
                description: "Rub the soap",
                pos:{
                    top:"35vw",
                    left:"67vw",  
                }
            }
        ]
    },
    {
        id:7,
        video: video7,
        description: "Come on, go ahead.",
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
                nextVidId: 8,
                description: "Rub the finger",
                pos:{
                    top:"35vw",
                    left:"67vw",  
                }
            }
        ]
    },
    {
        id:8,
        video: video8,
        description: "What are you gonna do now?",
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
                nextVidId: 9,
                description: "Rub the finger",
                pos:{
                    top:"35vw",
                    left:"67vw",  
                }
            }
        ]
    },
    {
        id:9,
        video: video9,
        description: "What would you do next?",
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
                nextVidId: 3,
                description: "Use the faucet",
                pos:{
                    top:"20vw",
                    left:"50vw", 
                }
            },
            {
                nextVidId: 10,
                description: "Use the towel",
                pos:{
                    top:"30vw",
                    left:"90vw", 
                }
            }
        ]
    },
    {
        id:10,
        video: video10,
        description: "Come on, go ahead.",
        points:[
            {
                nextVidId: 11,
                description: "Use the soap" ,
                pos:{
                    top:"17vw",
                    left:"27vw", 
                }
            },
        ]
    },
    
]

const DesciptTxt = styled.h2`
    position: absolute;
    margin-top: 120px;
    opacity: 0;
    transition: opacity 0.3s;
    color: #375CA6;
`

const Cont = styled.div`
    display: flex;
    justify-content: center;
`


export default function Tutorial(){
    const [playing,setPlaying] = useState(true)
    const [videoIndex,setVideoIndex] = useState(1)
    const [active,setActive] = useState(false)
    const [modal,setModal] = useState(false)
    const videoPlayer = useRef(null)


    useEffect(()=>{
        console.log(videoIndex)
    })

    const handleVideo = (e)=>{
        setPlaying(true)
        setActive(false)
        setVideoIndex(e)
    }

    const fetchVideo = ()=>{
        let res = ''
        if (videoIndex < 11){
            res = questions.find((e)=>{
                return e.id === videoIndex
            }).video
        }
        return res
    }

    const handleActive = () => {
        if(active){
            return 'active'
        }
        else{
            return
        }
    }

    const fetchPoint = ()=>{
        let res = []
        if (videoIndex < 11){
            res = questions.find((e)=>{
                return e.id === videoIndex
            }).points
        }
        
        
        return res.map((e)=>{return <Point className={handleActive()}
        descrip = {e.description} 
        top={e.pos.top} left={e.pos.left} 
        func={()=>{
            if (videoIndex < 10){
                handleVideo(e.nextVidId)
            }
            else{
                setModal(true)
            }}}></Point>})
    }


    const fetchDescrip = ()=>{
        let res = []
        if (videoIndex < 11){
            res = questions.find((e)=>{
                return e.id === videoIndex
            }).description
        }
        
        return <DesciptTxt className={handleActive()}>{res}</DesciptTxt>
    }
    

    return (
        <Cont>
        {/* <Image src={img}/> */}
        
        {fetchDescrip()}
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
        </Cont>
    );
}