import styled from 'styled-components'
import Button from '../Button/Button'
import gif from '../../assets/gif.gif'
import { Link } from 'react-router-dom'

const Done = styled.div`
    position: fixed;
    display: flex;
    width: 100vw;
    top: 0;
    left: 0;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: #48484862;
    z-index: 10;
`
const Box = styled.div`
    width: 40vw;
    height: 60vh;
    background: #f5f0e4;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`

const Title = styled.h3`
    font-size: 25px;
    color: #375CA6;
`

const Grade = styled.h3`
    font-size: 32px;
`

const BtnCont = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: center;
`

const Gif = styled.img`
    height: 200px;
`

export default function Modal(){
    return(
        <Done>
            <Box>
                <Title>Congratulations for your result!</Title>
                <Grade>200pts</Grade>
                <Gif src={gif}></Gif>
                <BtnCont>
                    <Link style={{cursor:'pointer'}} to="/">
                        <Button bgcolor="transparent" title="Read the article"></Button>
                    </Link>
                    <Link style={{cursor:'pointer'}} to="/">
                        <Button bgcolor="#7A64F5" title="Claim the points"></Button>
                    </Link>
                </BtnCont>
            </Box>
        </Done>
    )
}