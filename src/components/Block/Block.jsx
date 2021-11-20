import styled from "styled-components"

const Cont = styled.div`
    display: flex;
    width: 100%;                /**Remove this later */
    height: 100%;              /**Remove this later */
    background: white;
    flex-direction: column;
    border-radius: 8px;
`

const TitleCont = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    h3{
        color: #375CA6;
    }
`

export default function Block(props){
    return (
        <Cont className={props.class}>
            <TitleCont>
                <h3>{props.title}</h3>
            </TitleCont>
            {props.children}
        </Cont>
    )
}