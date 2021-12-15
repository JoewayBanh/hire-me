import React from "react";
import styled from "styled-components";
import ChildCard from "./ChildCard";

const ChildrenList = ({ childData }) => {
  return (
    <Container>
      {childData.map((child) => (
        <ChildCard
          key={child.childId}
          childId={child.childId}
          image={child.image.large}
          fullName={child.name.fullName}
          checkedIn={child.checkedIn}
          gender={child.gender}
        />
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
`;
export default ChildrenList;
