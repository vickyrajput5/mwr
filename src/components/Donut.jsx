import React from 'react'
import styled from 'styled-components';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
export default function Donut(){
    const data = [
     
        {
          data: 5300,
        },
        
        
        {
          data: 7300,
        },
        {
          data: 7000,
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
        {
            data: 6000,
          },
          {
            data: 8000,
          },
          {
            data: 6000,
          },
          {
            data: 8000,data: 8000,data: 8000,
          },
      ];
    return(
        
        <Section>
            <div className="chart">
   <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
              <defs>
                  <linearGradient id='colorview' x1="1" y1="5" x2="0" y2="5">
                      <stop
                      offset="10%"
                      stopColor='#ff3311'
                      stopOpacity={0.4}
                      >
                        
                      </stop>
                      <stop 
                      offset="100%"
                      stopColor='#e9fa00'
                      stopOpacity={0.6}
                      >

                      </stop>
                  </linearGradient>
              </defs>
            <Tooltip cursor={false} />
            <Bar
              animationBegin={800}
              animationDuration={2000}
        
              dataKey="data"
            
              fill="url(#colorview)"
              
            />
          </BarChart>
        </ResponsiveContainer>
        </div>
        </Section>
    )
}

const Section = styled.section `
.chart{
    height: 10rem;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
}
`;
