import styled from "styled-components"

const Btn = styled.button`
    padding: 20px 10px;
    background: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: var(--font-sec);
`

export default function Button(props){
    return(
        <Btn color= {props.color} bgcolor={props.bgcolor}>
            {props.title}
        </Btn>
    )
}