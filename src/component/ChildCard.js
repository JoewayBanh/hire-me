import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { accessInfo } from "../Utils/AccessInfo";

const ChildCard = (props) => {
  const [isCheckedIn, setIsCheckedIn] = useState(props.checkedIn);

  const currentDay = new Date();
  let hrs = currentDay.getHours();
  let mins = currentDay.getMinutes();

  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  const currentTime = hrs + ":" + mins;

  const checkInHandler = async (e) => {
    await axios
      .post(`https://app.famly.co/api/v2/children/${props.childId}/checkins`, {
        accessToken: accessInfo.accessToken,
        pickupTime: currentTime,
      })
      .then((res) => {
        setIsCheckedIn(res.checkedIn);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const checkOutHandler = async (e) => {
    await axios
      .post(`https://app.famly.co/api/v2/children/${props.childId}/checkout`, {
        accessToken: accessInfo.accessToken,
      })
      .then((res) => {
        setIsCheckedIn(res.checkedIn);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card
      style={
        props.gender === 1
          ? { backgroundColor: "#89cff0" }
          : { backgroundColor: "#F4C2C2" }
      }
    >
      <img src={props.image} alt={`Picture of ${props.fullName}`} />
      <h2>{props.fullName}</h2>
      <div>
        <button
          className="check-in"
          disabled={isCheckedIn}
          onClick={checkInHandler}
        >
          Check-in
        </button>
        <button
          className="check-out"
          disabled={!isCheckedIn}
          onClick={checkOutHandler}
        >
          Checkout
        </button>
      </div>
    </Card>
  );
};

const Card = styled.div`
  margin: 1.5rem 3rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  border: 2px solid #f9e4e4;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  img {
    margin: 0.5rem;
    border-radius: 0.5rem;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  button {
    margin: 1rem 0 0.2rem 0;
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
  .check-in {
    background-color: #8bf58a;
  }
  .check-out {
    background-color: #fca2a2;
  }
`;

export default ChildCard;
