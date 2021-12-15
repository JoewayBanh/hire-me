import React, { Suspense, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { accessInfo } from "./Utils/AccessInfo";
const ChildrenList = React.lazy(() => import("./component/ChildrenList"));

function App() {
  const [childData, setChildData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://app.famly.co/api/daycare/tablet/group`, {
          params: accessInfo,
        })
        .then((res) => setChildData(res.data.children));
    }
    fetchData();
  }, []);

  return (
    <Body>
      <Suspense fallback={<Fallback>Loading...</Fallback>}>
        <h1>List of Children</h1>
        <ChildrenList childData={childData} />
      </Suspense>
    </Body>
  );
}

const Fallback = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7rem;
`;
const Body = styled.div`
  background-color: rgb(245, 255, 247);
  h1 {
    margin: 0;
    text-align: center;
    padding: 1rem;
  }
`;
export default App;
