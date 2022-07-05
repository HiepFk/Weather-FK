import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { changeStr } from "../util/function";
import { FiSearch } from "react-icons/fi";
function Detail({ data, setCity }) {
  const [value, setValue] = useState("");
  const handeSubmit = (e) => {
    e.preventDefault();
    setCity(changeStr(value));
  };
  return (
    <Wrapper>
      <form action="" className="form" onSubmit={handeSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Another city"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          <FiSearch className="icon-search" />
        </button>
      </form>
      <div className="city">
        <div className="city_name" onClick={() => setCity("ha noi")}>
          Hà Nội
        </div>
        <div className="city_name" onClick={() => setCity("ho chi minh")}>
          Thành phố Hồ Chí Minh
        </div>
        <div className="city_name" onClick={() => setCity("da nang")}>
          Đà Nẵng
        </div>
      </div>
      <div className="hr"></div>
      <div className="title">Weather Details</div>
      <div className="container">
        <div className="name">Feel like</div>
        <div className="value">{Math.round(data?.main?.feels_like)} *C</div>
      </div>
      <div className="container">
        <div className="name">Humidity</div>
        <div className="value">{data?.main?.humidity} %</div>
      </div>
      <div className="container">
        <div className="name">Wind</div>
        <div className="value">
          {Math.round((data?.wind?.speed * 3.6).toFixed(2))} km/h
        </div>
      </div>
      {/* {data.rain.$`{"1h"}` && (
        <>
          <div className="container">
            <div className="name">Rain</div>
            <div className="value">{data.rain.$`{"1h"}`}</div>
          </div>
        </>
      )} */}
      <div className="container">
        <div className="name">Sunrise</div>
        <div className="value">
          {moment.unix(data?.sys?.sunrise).format("HH:mm")}
        </div>
      </div>
      <div className="container">
        <div className="name">Sundown</div>
        <div className="value">
          {moment.unix(data?.sys?.sunset).format("HH:mm")}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 45rem;
  position: absolute;
  backdrop-filter: blur(15px);
  padding: 3rem 2rem;
  overflow-x: hidden;
  overflow-y: scroll;
  .form {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
  }
  .input {
    width: calc(100% - 5rem);
    background-color: transparent;
    border: none;
    padding: 1rem 0rem;
    font-size: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    color: white;
  }
  .btn {
    width: 5rem;
    height: 5rem;
    background-color: white;
    border: none;
    margin-left: 1rem;
  }
  .icon-search {
    color: black;
    font-size: 3rem;
  }
  .city {
    display: flex;
    flex-direction: column;
  }
  .city_name {
    color: white;
    font-size: 1.75rem;
    opacity: 0.4;
    margin-bottom: 3rem;
    cursor: pointer;
  }
  .hr {
    background-color: rgba(255, 255, 255, 0.45);
    height: 0.5px;
    margin-bottom: 5rem;
  }
  .title {
    font-size: 2rem;
    margin-bottom: 4rem;
  }
  .container {
    color: white;
    font-size: 1.75rem;
    opacity: 0.4;
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
  }
  .name {
    width: calc(100% - 9rem);
  }
`;
export default Detail;
