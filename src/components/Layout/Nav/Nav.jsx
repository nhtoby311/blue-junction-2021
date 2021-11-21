import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../Logo/Logo"

const Cont = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    padding: 2vw 3.5vw;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(180deg, #F2E0D5 0%, rgba(242, 224, 213, 0) 92.27%);
    z-index: 100;
`

export default function Nav(){
    return (
        <Cont>
            <div>menu</div>
            <Link to="/">
                <Logo></Logo>
            </Link>
            <div></div>
        </Cont>
    )
}