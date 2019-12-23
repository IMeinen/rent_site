import styled from 'styled-components';

import ImagemExemplo from '../Main/images/foto_sobre1.jpg';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 90%;
  margin-left: 5%;
  text-align: center;
`;

export const Centro = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  background-image: url(${ImagemExemplo});
  background-repeat: no-repeat;
  background-size: cover;

  margin-bottom: 20px;

  @media only screen and (min-width: 1200px) {
    border: 20px solid #333;
    width: 50%;
    height: 800px;
    display: inline-block;
    text-align: center;
    margin-top: 3%;
    background-position-y: 80%;
  }

  /* @media only screen and (min-width: 768px) and (max-width: 1199px)  {
    border: 20px solid #333;
    width: 40%;
    height: 80%;
    margin-left: 12%;
  } */

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    border: 10px solid #333;
    width: 90%;
    height: 60vh;
    background-position-y: 90%;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    border: 15px solid #333;
    width: 90%;
    height: 50%;
    margin-left: 8%;
  }

  @media only screen and (min-width: 200px) and (max-width: 479px) {
    border: 10px solid #333;
    width: 90%;
    height: 60vh;
  }
`;

export const Description = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);

  h1 {
    color: #111;
    font-family: 'Be Vietnam';
    font-size: 24px;
    display: inline-block;
    margin-top: 4%;
    margin-bottom: 4%;

    @media only screen and (min-width: 1700px) {
      font-size: 40px;
      margin-top: 1%;
      margin-bottom: 1%;
    }

    @media only screen and (min-width: 1200px) and (max-width: 1699px) {
      font-size: 36px;
      margin-top: 1%;
      margin-bottom: 1%;
    }
  }

  p {
    margin-top: 1%;
    margin-left: 5%;
    width: 90%;
    padding-bottom: 14px;
    color: #222;
    font-weight: bolder;
    font-family: 'Be Vietnam';

    text-align: left;

    @media only screen and (min-width: 1700px) {
      font-size: 18px;
    }

    @media only screen and (min-width: 1200px) and (max-width: 1699px) {
      font-size: 11px;
    }

    @media only screen and (min-width: 800px) and (max-width: 1199px) {
      font-size: 10px;
    }

    @media only screen and (min-width: 640px) and (max-width: 799px) {
      font-size: 8px;
    }

    @media only screen and (min-width: 700px) and (max-width: 1000px) {
      font-size: 12px;
    }

    @media only screen and (min-width: 200px) and (max-width: 699px) {
      font-size: 12px;
    }
  }
`;

export const Botao = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background-color: #333;
  width: 200px;

  @media only screen and (min-width: 800px) {
    width: 300px;
    margin-top: 3%;
  }
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  display: inline-block;
  justify-content: center;
  margin-bottom: 5%;
  text-align: center;

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 14px;
    margin: 10px;

    @media only screen and (min-width: 800px) {
      font-size: 18px;
      margin: 15px;
    }
  }
`;

export const Subtitle = styled.legend`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  font-family: 'Be Vietnam';
  font-size: 10px;
  margin-top: -20px;
  padding: 7px;
`;
