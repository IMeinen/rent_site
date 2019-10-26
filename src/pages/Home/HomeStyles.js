import styled from 'styled-components';

import HG from '../Main/images/rent_riachuelo.jpg';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 3;
`;

export const Content2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 90%;
  height: 80%;
  background-color: #fff;
  margin-top: 5%;
  margin-left: 5%;
  z-index: 3;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 40%;
  height: 80vh;
  background-color: #fff;

  z-index: 3;

  h1 {
    @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

    color: #000;
    font-family: 'Be Vietnam';

    padding-top: 5%;
    padding-left: 5%;

    @media (min-width: 1750px) {
      font-size: 45px;
    }

    @media (min-width: 200px) and (max-width: 1749px) {
      font-size: 35px;
    }
  }

  p {
    margin-top: 5%;
    padding-left: 5%;
    color: #000;
    font-family: 'Be Vietnam';

    width: 70%;
    @media (min-width: 1750px) {
      font-size: 22px;
    }

    @media (min-width: 200px) and (max-width: 1749px) {
      font-size: 18px;
    }
  }
`;

export const IMGBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60%;
  height: 80%;

  border-left: 1px solid #f78f2d;

  z-index: 3;
  background-color: #fff;
`;

export const BotaoContato = styled.div`
  width: 300px;
  height: 100px;
  align-self: center;
  justify-self: center;

  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f78f2d;

  @media (min-width: 1750px) {
    width: 300px;
    height: 100px;
    margin-top: 15%;
  }

  @media (min-width: 200px) and (max-width: 1749px) {
    width: 250px;
    height: 80px;
    margin-top: 7%;
  }

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    padding: 0px;
    text-align: center;

    vertical-align: middle;
    width: 60%;

    @media (min-width: 1750px) {
      font-size: 25px;
    }

    @media (min-width: 200px) and (max-width: 1749px) {
      font-size: 21px;
    }
  }
`;

export const ContainerSlideShow = styled.div`
  width: 90%;
  height: 90%;
  margin: 5%;
  z-index: 3;
  background-image: url(${HG});
  background-repeat: no-repeat;
  background-size: cover;
`;
