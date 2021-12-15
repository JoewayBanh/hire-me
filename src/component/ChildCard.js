import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { accessInfo } from "../Utils/AccessInfo";

const ChildCard = (props) => {
  const [isCheckedIn, setIsCheckedIn] = useState(props.checkedIn);

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
        <button disabled={isCheckedIn} style={{ backgroundColor: "#8bf58a" }}>
          Check-in
        </button>
        <button disabled={!isCheckedIn} style={{ backgroundColor: "#fca2a2" }}>
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
`;

export default ChildCard;
