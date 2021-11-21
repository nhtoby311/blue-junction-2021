import styled from "styled-components"

const Btn = styled.button`
    padding: 15px 10px;
    background: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
    border: ${(props) => props.border ? 'solid 2px #7A64F5' : 'none'};
    border-radius: 4px;
    cursor: pointer;
    font-family: var(--font-sec);
`

export default function Button(props){
    return(
        <Btn border = {props.border} color= {props.color} bgcolor={props.bgcolor}>
            {props.title}
        </Btn>
    )
}