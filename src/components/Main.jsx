import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Detail from "./Detail";
import Info from "./Info";
import cloud from "../assets/rain.jpg";
function Main() {
  const [city, setCity] = useState("thai binh");
  const [data, setData] = useState("");

  console.log(city);

  const url = `${process.env.REACT_APP_API_BASE}weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&lang=vi&units=metric`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [url, city]);

  return (
    <Wrapper
      style={{
        background: `url(${cloud}) no-repeat center/cover`,
      }}
    >
      <Info data={data} />
      <Detail data={data} setCity={setCity} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 20rem);
  width: calc(100% - 20rem);
  color: white;
`;
export default Main;
