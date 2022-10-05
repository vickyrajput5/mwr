import React from 'react'
import styled from "styled-components";
import image from "../img/ws-y.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./Reuseablestyle";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <Section>
      <motion.div className="profile-main"
     
       animate={{scale:[0,1, 0.01, 1]}}
       transition={{times:[0,1,1.01,1], duration:1}}
      >
      <motion.div className="image"
      // animate={{ rotate: 360 }}
      // transition={{ from: 270, duration: 2, delay:1,  }}
      animate={{ baseFrequency: 0.5 } }
      transition={{ type: "spring", mass: 0.5 }}
      >
        <img src={image} alt="" />
      </motion.div>
      <motion.div className="title"
        animate={{  x: 0 }}
        transition={{ from:200,type: "spring", bounce: 0.25, duration:3 }}
    >
        <h2>Muhammad Waqar</h2>
        <h5>
          <HiOutlineLocationMarker /> New York, USA
        </h5>
      </motion.div>
      <div className="info">
        <motion.div className="container"
        animate={{x:0}}
        transition={{from:-100, duration:2, bounce:1, delay:1}}
        >
          <h5>Days at work</h5>
          <h3>28</h3>
        </motion.div>
        <motion.div 
      animate={{scale:[0,1, 1.01, 1]}}
      transition={{times:[0,1,1.01,1], duration:1}}className="container">
          <h5>Rides</h5>
          <h3>427</h3>
        </motion.div>
        <motion.div className="container"
        animate={{x:0}}
        transition={{from:100, duration:1, bounce:1,  delay:1}}
        >
          <h5>Hours</h5>
          <h3>76</h3>
        </motion.div>
      </div>
      </motion.div>
    </Section>
  )
}

export default Profile
const Section = styled.section`
.profile-main{
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #e9fa00;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
}
`;
