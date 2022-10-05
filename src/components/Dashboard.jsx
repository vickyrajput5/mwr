import React, { useEffect } from "react";
import styled from "styled-components";
import Analitical from "./Analitical";
import Earning from "./Earning";
import { FAQ } from "./FAQ";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Transfer from "./Transfer";
import Payment from "./Payment";
import scrollreveal from "scrollreveal";
import Chart1 from "./Chart1";


export default function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__tw,
        .paymant-chart
    `,
      {
        opacity: 0,
        interval: 500,
      }
    );
  }, []);
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row__one">
          <Analitical />
          <FAQ />
        </div>
        <div className="row__two">
          <Earning className="er"/>
          <Transfer />
          <Profile />
        </div>
        <div className="paymant-chart">
          <Payment/>
        </div>
        <div className="chart1">
          <Chart1 name="Waqar"/>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  @media (max-width:600px){
    padding: 1rem;
  }
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
      overflow: hidden;
    }
    .paymant-chart{
      color:#fff ;
      height: 30rem;
      width:100% ;
      background-color:#212121;
      border-radius:1rem ;
      padding:.6rem 0rem 0rem 0rem;
    }
    .list{
      color: #fff;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
