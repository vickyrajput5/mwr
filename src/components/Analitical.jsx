import React from 'react'
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { FaHatCowboy } from "react-icons/fa";
import { GiPodiumWinner, GiTrophyCup } from "react-icons/gi";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from './Reuseablestyle';
const Analitical = () => {
  return (
    <Section>
    <div className="analytic ">
      <div className="content">
        <h5>Matches</h5>
        <h2>82</h2>
      </div>
      <div className="logo">
        <GiTrophyCup />
      </div>
    </div>
    <div className="analytic">
      <div className="logo">
        <GiPodiumWinner />
      </div>
      <div className="content">
        <h5>Winning</h5>
        <h2>50</h2>
      </div>
    </div>
    <div className="analytic">
      
      <div className="content">
        <h5>New Riders</h5>
        <h2>12</h2>
      </div>
      <div className="logo">
      <FaHatCowboy />
      </div>
    </div>
    <div className="analytic ">
    <div className="logo">
        <FiActivity />
      </div>
      <div className="content">
        <h5>Total Riders</h5>
        <h2>35</h2>
      </div>
      
    </div>
  </Section>
  )
}

export default Analitical
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #e9fa00;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
    .content{
      text-align: center;
      h5{
        font-size: 1rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;