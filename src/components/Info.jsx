import React from "react";
import styled from "styled-components";

function Info({ data }) {
  const today = new Date();
  const date =
    today.getHours() +
    "H - " +
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear();
  return (
    <Wrapper>
      <div className="temp">{Math.round(data?.main?.temp)}</div>
      <div className="center">
        {data?.name?.includes("Thành Phố") ||
        data?.name?.includes("Thành phố") ? (
          <>
            <div className="city">{data?.name?.slice(10)}</div>
          </>
        ) : (
          <>
            <div className="city">{data?.name}</div>
          </>
        )}
        <div className="date">{date}</div>
      </div>
      <div className="status">
        <img
          src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
          className="icon"
        />
        <div className="detail">{data?.weather?.[0]?.description}</div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  bottom: 10rem;
  left: 10rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .temp {
    font-size: 15rem;
    margin-right: 4rem;
    transform: translateY(2.5rem);
    :before {
      content: "o";
      position: absolute;
      top: -2rem;
      left: 15rem;
      font-size: 4rem;
    }
  }
  .center {
    margin-right: 2rem;
  }

  .city {
    font-size: 5rem;
  }
  .date {
    margin-top: 1.5rem;
  }
  .status {
    display: flex;
    flex-direction: column;
  }
  .detail {
    text-align: center;
  }
`;
export default Info;
