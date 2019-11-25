import styled from 'styled-components';

import ImagemExemplo from '../Main/images/foto_sobre1.jpg';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  text-align: center;

  background: linear-gradient(to right, #f78f2d, #f7532c);
`;

export const Centro = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  background-image: url(${ImagemExemplo});
  background-repeat: no-repeat;
  background-size: cover;

  transform: translateX(5.5%);
  margin-bottom: 20px;

  @media only screen and (min-width: 1700px) {
    border: 30px solid #333;
    width: 40%;
    height: 90%;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1699px) {
    border: 25px solid #333;
    width: 40%;
    height: 90%;
    margin-left: 12%;
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
    }

    @media only screen and (min-width: 1200px) and (max-width: 1699px) {
      font-size: 36px;
    }
  }

  p {
    margin-top: 1%;
    margin-left: 5%;
    width: 90%;
    padding-bottom: 14px;
    color: #111;
    font-family: 'Be Vietnam';

    text-align: left;

    @media only screen and (min-width: 1700px) {
      font-size: 18px;
    }

    @media only screen and (min-width: 1200px) and (max-width: 1699px) {
      font-size: 12px;
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

  background-color: #f78f2d;
  width: 200px;

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
  }
`;
