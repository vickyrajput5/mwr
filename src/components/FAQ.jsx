import React from "react";
import styled from "styled-components";
import { cardStyles } from "./Reuseablestyle";
import Donut from "./Donut";
export const FAQ = () =>{
   
    return(
        <Section>
        <div className="title">
          <h2>Information for Riders</h2>
        </div>
        <div className="faqs">
         <Donut/>
        </div>
      </Section>
    )
}
const Section = styled.section`
  ${cardStyles};
  .title {
    h2 {
      color: #e9fa00;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;
