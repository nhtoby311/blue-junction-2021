import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";

import styled from "styled-components";

const Cont = styled.div`
    width: 100%;
    height: 85%;
    span{
        font-family: var(--font-sec);
        font-size: 13px;
    }
    padding: 15px;
`

function arrayOfMonth(arr){
    let d = new Date(arr[0].TimeStamp)
    let res = []
    for(let i = 1; i <= 12; i++){
        const a = new Date(d.setMonth(d.getMonth()+1))
        d.setMonth(d.getMonth()-1)
        d.setMonth(d.getMonth()-1)
        const filteredArr = arr.filter((e)=>{
            return Date.parse(e.TimeStamp) < a && Date.parse(e.TimeStamp) > d
        })
        d.setMonth(d.getMonth()+1)
        d.setMonth(d.getMonth()+1)

        //res[i] = filteredArr                      //get array of object for each months
        //res[i] = filteredArr.map(e=> parseInt(e.Consumption)).reduce((p,e)=>{return p + e})
        res.push(filteredArr.map(e=> parseInt(e.Consumption)).reduce((p,e)=>{return p + e}))
    }
    return res
}


export default function Chart(props){
    const pData = props.data
    console.log(pData)

    const dishwasherArr = pData.Dishwasher.measurements
    const hydractivaShowerArr = pData.Hydractiva_shower.measurements
    const kitchenOptimaFacetArr = pData.Kitchen_optima_faucet.measurements
    const optimaFaucetArr = pData.Optima_faucet.measurements
    
    console.log(arrayOfMonth(dishwasherArr))

    const Months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    let res = []
    arrayOfMonth(dishwasherArr).map((e,ind)=>{
        return res.push({month:Months[ind],DishWasher:e})
    })

    console.log(arrayOfMonth(hydractivaShowerArr))
    const HydractiveShower = arrayOfMonth(hydractivaShowerArr)
    const KitchenOptimaFacet = arrayOfMonth(kitchenOptimaFacetArr)
    const OptimaFaucet = arrayOfMonth(optimaFaucetArr)

    res = res.map((e,ind) => {return {...e,HydractiveShower: HydractiveShower[ind]}})
    res = res.map((e,ind) => {return {...e,KitchenOptimaFacet: KitchenOptimaFacet[ind]}})
    res = res.map((e,ind) => {return {...e,OptimaFaucet: OptimaFaucet[ind]}})
    console.log(res)


    return(
        <Cont>
            <ResponsiveContainer height='100%' width='100%'>
                <LineChart
                data={res}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="OptimaFaucet"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="HydractiveShower"
                        stroke="#beb510"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="KitchenOptimaFacet"
                        stroke="#bc5831"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="DishWasher" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </Cont>
        
        
    )
}