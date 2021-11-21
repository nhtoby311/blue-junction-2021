import data from '../data/db.json'
import '../styles/Home.css'
import styled from 'styled-components'
import Block from '../components/Block/Block'
import Button from '../components/Button/Button'
import { Link } from 'react-router-dom'
import Chart from '../components/Chart/Chart'
import thumbnailTest from '../assets/handwash-img.png'

const Spacer = styled.div`
    height: 150px;
`

const TestDiv = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 15px;
    gap: 25px;
`
const Text = styled.p`
    font-family: var(--font-sec);
    font-size: 15px;
    
`
const BtnDivTest = styled.div`
    display: flex;
    justify-content: space-between;
`

const Img = styled.img`
    height: 200px;
    border-radius: 8px;
`


export default function Home(){
    //console.log(data.houses[0].apartments[7])
    return (
        <>
            <Spacer/>
            <div class="container">
                <Block class="monthly" title="Annually water consumption (L)">
                   <Chart data={data.houses[0].apartments[7]}/>
                </Block>
                <Block class="Test" title="Test your hand washing skills!">
                    <TestDiv>
                        <Text>Show us how you regularly wash your hands, we’ll tell who you are. Get precious gifts by claiming your extra points!</Text>
                        <Img src={thumbnailTest} alt="" />
                        <BtnDivTest>
                            <Button color ="#7A64F5" border bgcolor="transparent" title="Maybe Later"></Button>
                            <Link to='/tutorial'>
                                <Button color="white" bgcolor="#7A64F5" title="Take the challenge"></Button>
                            </Link>
                        </BtnDivTest>
                    </TestDiv>
                </Block>
                <Block class="cus1" title="Check out the shop"></Block>
                <Block class="article" title="Tips on how to save money"></Block>
                <Block class="cus2" title="Energy Fee"></Block>
            </div>
        </>
        )
}