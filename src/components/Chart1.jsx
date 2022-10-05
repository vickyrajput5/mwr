import React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import styled from 'styled-components';
import { cardStyles } from "./Reuseablestyle";
export default function Chart1(props){
    const data = [
        { data: 5500 },
        {
          data: 9500,
        },
        {
          data: 3500,
        },
        {
          data: 4400,
        },
        {
          data: 4800,
        },
        {
          data: 5300,
        },
        {
          data: 5800,
        },
        {
          data: 6000,
        },
        {
          data: 6300,
        },
        {
          data: 6580,
        },
        {
          data: 6780,
        },
        {
          data: 6680,
        },
        {
          data: 9500,
        },
        {
          data: 6300,
        },
        {
          data: 5900,
        },
        {
          data: 5700,
        },
        {
          data: 5500,
        },
        {
          data: 5300,
        },
        {
          data: 5100,
        },
        {
          data: 5090,
        },
        {
          data: 5300,
        },
        {
          data: 5800,
        },
        {
          data: 6000,
        },
        {
          data: 6300,
        },
        {
          data: 6780,
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
          data: 6700,
        },
        {
          data: 7000,
        },
        {
          data: 7300,
        },
        {
          data: 7500,
        },
        {
          data: 7700,
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
          data: 10490,
        },
        {
          data: 6000,
        },
        {
          data: 8000,
        },
      ];
     
    return(
       <Section>
          <div className="chart-title">
              <h1>Chart 1 {props.name}</h1>
          </div>
          <div className="chart1">
              <ResponsiveContainer  width="100%" height="100%">
                  <AreaChart
                  width={500}
                  height={400}
                  data={data}
                 
                  >
                      <Area 
                      type="monotone"
                      dataKey="data"
                    
                      stroke="#ff000f"
                      strokeWidth={4}
                      fill="#8068233e"
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  
${cardStyles}
padding: 2rem 0 0 0;
.chart-title{
    h1{
        font-size: 30px;
        color: #fff;
    }
}
.chart1{
    height: 16rem;
}
`;