import styled from "styled-components"
import './Point.css'

const Cont = styled.div`
    opacity: 0;
    position: absolute;
    width : 35px;
    height: 35px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.517);
    border-radius: 50%;
    top: ${props => props.top ? props.top : 0};
    left: ${props => props.left ? props.left : 0};
    div{
        position: relative;
        width : 15px;
        height: 15px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 1);

        
    }
    &:hover span{
        opacity: 1;
    }
`
const Inner = styled.span`
    position: absolute;
    width: 150px;
    display: flex;
    flex-wrap: wrap;
    left: -12vw;
    top: -2vh;
    padding: 20px 40px;
    background: #f8f2e6;
    border-radius: 8px;
    box-shadow: 15px 13px 24px -10px rgba(0,0,0,0.18);
    transition: opacity 0.35s;
    opacity: 0;
    p{
        font-size: 20px;
    }
    
    
`

export default function Point(props){
    return (
        <Cont className = {props.className} top={props.top} left={props.left} onClick={props.func}>
            <div>
                <Inner>
                    <p>{props.descrip}</p>
                </Inner>
            </div>
        </Cont>
    )
}