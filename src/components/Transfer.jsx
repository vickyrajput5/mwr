import React from 'react'
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../img/ws.jpg";
import avatarImage1 from "../img/sultan.jpg";
import avatarImage2 from "../img/download.jpg";
import { cardStyles } from "./Reuseablestyle";
import { motion } from 'framer-motion';
const Transfer = () => {
  const transactions = [
    {
      image: avatarImage1,
      name: "Sahibzada Sultan",
      time: "Today, 16:36",
      amount: "PK",
    },
    {
      image: avatarImage,
      name: "M Waqar",
      time: "Today, 08:49",
      amount: "PK",
    },
    {
      image: avatarImage2,
      name: "Jadon S.",
      time: "Today, 14:36",
      amount: "UK",
    },
  ];
  return (
    <Section>
     <motion.div className="transfer-main"
     animate={{scale:[0,1, 0.01, 1]}}
     transition={{times:[0,1,1.01,1], duration:.5}}
     >
     <div className="title">
        <h2>Top Riders in 2022</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => {
          return (
            <div className="transaction">
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <img src={transaction.image} alt="" />
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a className="view" href="#">
        View all <HiArrowNarrowRight />
      </a>
     </motion.div>
    </Section>
  )
}

export default Transfer
const Section = styled.section`
.transfer-main{
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #e9fa00;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
        &__details {
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #e9fa00;
          span {
            color: black;
          }
        }
        span {
          color: #e9fa00;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #e9fa00;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: start;
        gap: 1rem;
      }
    }
  }
}
`;