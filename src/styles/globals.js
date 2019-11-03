import styled, { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,body, #root {
    min-height: 100%;
  }

  body {
    /* background: linear-gradient(-90deg,${lighten(
      0.03,
      '#ff8a24'
    )},#ffba24); */
    background: #fff;
    -webkit-font-smoothing: antialiesed !important;
  }

`;

export const Cabec = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  width: 100%;
  background: #333;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 5;
  height: 80px;

  /* celular */
  @media only screen and (min-width: 240px) and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 1.5) {
    height: 60px;
  }
    img {
      @media only screen and (min-width: 240px) and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 1.5) {
      max-width: 100px;
      border-radius: 50%;
      margin-left: 8%;
      margin-right: 10%;
      margin-top: 55px;
      }
    }

  }

  /* tablet e celular grande */
  @media only screen and (min-width: 768px) and (max-width: 1199px) and (-webkit-min-device-pixel-ratio: 1.5) {
    ul {
      display: none;
    }
    li {
      display: none;
    }

    img {
      width: 110px;
      border-radius: 50%;
      margin-left: 8%;
      margin-right: 10%;
      margin-top: 75px;
    }

    a {
      padding-left: 55%;
      margin-top: 2%;
    }
  }

  /* PC ou maior */

  a.menu {
    @media (min-width: 1200px) {
      display: none;
    }

    float: right;
    margin-right: 7%;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-self: center;
    align-self: center;
    @media only screen and (min-width: 1px) and (max-width: 1199px) and (-webkit-min-device-pixel-ratio: 1.5) {
      display: none;
    }
  }

  a {
    color: #ffffff;
    font-family: 'Be Vietnam';
    font-size: 20px;
    padding: 10px;
    text-decoration: none;
  }
  img {
    width: 140px;
    border-radius: 50%;
    margin-left: 10%;

    margin-top: 75px;
  }

  div.login {
    @media only screen and (min-width: 1px) and (max-width: 1199px) and (-webkit-min-device-pixel-ratio: 1.5) {
      display: none;
    }
    background-color: #ff8a24;
    width: 8%;
    height: 55%;
    justify-self: flex-start;
    margin-right: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 20px;
      font-family: 'Be Vietnam';
      color: #fff;
    }
  }
`;
