import React from 'react'
import styled from 'styled-components';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts'
import { BsCurrencyDollar } from "react-icons/bs";
export default function Payment(){
    const data = [
        { data: 3500 },
        {
          data: 4600,
        },
        {
          data: 2700,
        },
        {
          data: 5800,
        },
        {
          data: 6900,
        },
        {
          data: 8000,
        },
        {
          data: 1100,
        },
        {
          data: 6200,
        },
        {
          data: 3300,
        },
        {
          data: 4400,
        },
        {
          data: 5500,
        },
        {
          data: 2600,
        },
        {
          data: 7700,
        },
        {
          data: 6800,
        },
        
        {
          data: 3900,
        },
        {
          data: 4000,
        },
        {
          data: 5100,
        },
        {
          data: 1200,
        },
        {
          data: 6300,
        },
        {
          data: 2400,
        },
        {
          data: 5580,
        },
        {
          data: 4600,
        },
        {
          data: 2700,
        },
        {
          data: 3800,
        },
        {
          data: 6900,
        },
        {
          data: 8000,
        },
        {
          data: 7100,
        },
        {
          data: 4200,
        },
        {
          data: 5500,
        },
        {
          data: 8090,
        },
        {
          data: 8190,
        },
        {
          data: 7990,
        },
      
        {
          data: 7700,
        },
        {
          data: 7500,
        },
        {
          data: 7300,
        },
        {
          data: 7000,
        },
        {
          data: 6700,
        },
        {
          data: 6500,
        },
        {
          data: 6300,
        },
        {
          data: 6500,
        },
        {
          data: 6780,
        },
        {
          data: 6300,
        },
        {
          data: 6000,
        },
        {
          data: 5800,
        },
      
        {
          data: 10090,
        },
        {
          data: 7080,
        },
        {
          data: 9000,
        },
      ];
    return(
      <Section>
          <div className="payment-title">
              <h2>Currency Chart</h2>
              <div className="currency">
              <BsCurrencyDollar />
              </div>
          </div>
          <div className="payment-cart">
              <ResponsiveContainer height="100%" width="100%">
                  <AreaChart
                  data={data}>
                  <defs>
                      <linearGradient id='colorView' x1="2" y1="1"  x2="0" y2="1" >
                          <stop 
                          offset="10%"
                          stopColor='#ff0'
                          stopOpacity={0.7}
                          >
                          </stop>
                          <stop 
                          offset="100%"
                          stopColor='#22221a'
                          stopOpacity={0.8}
                          >
                          </stop>
                      </linearGradient>
                  </defs>
                  <Tooltip cursor={false}/>
                  <Area
                  type='monotone'
                  dataKey="data"
                  stroke="#ff0909"
                  strokeWidth={4}
                  fill="url(#colorView)"
                  animationBegin={800}
                  animationDuration={2000}
                  />
                  </AreaChart>
              </ResponsiveContainer>
          </div>
      </Section>
    )
}

const Section = styled.section `
.payment-title{
    display: flex;
    justify-content:space-between;
    align-items:center ;
    padding:0rem 2rem ;
    h2{
        color: #e9fa00;
    font-family: "Permanent Marker",cursive;
    letter-spacing: 0.3rem;
    }
    .currency{
        width: 70px;
        height: 70px;
        border-radius: 50px;
        background-color:#000 ;
        color: #fff;
        font-size: 3rem;
        font-weight:bold ;
        display:flex;
        align-items:center ;
        justify-content:center ;
        transition: .5s ease-in-out;
        cursor: pointer;
        &:hover{
          background-color: #e9fa00;
          color: #000;
          
        svg{
          -ms-transform: scale(1.5); /* IE 9 */
          -webkit-transform: scale(1.5); /* Safari 3-8 */
          transform: scale(1.5); 
          transition: 1s ease-in-out;
        }  
        }
        @media (max-width:600px){
          font-size: 1.2rem;
          width: 50px;
          height: 35px;
        }
    }
}
.payment-cart{
    height: 25rem;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
}
`;