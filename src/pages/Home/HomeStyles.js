import styled from 'styled-components';
import FundoDiagonal from '../Main/images/fundo_diagonal2.svg';
import ImagemExemplo from '../Main/images/foto_sobre.jpg';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  height: 92vh;
  background: linear-gradient(to right, #f78f2d, #f7532c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 90%;
`;

export const Centro = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  background-image: url(${ImagemExemplo});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 15%;

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

  @media only screen and (min-width: 768px) and (max-width: 1199px) and (orientation: landscape) {
    border: 20px solid #333;
    width: 40%;
    height: 80%;
    margin-left: 12%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) and (orientation: portrait) {
    border: 18px solid #333;
    width: 50%;
    height: 50%;
    margin-left: 8%;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) and (orientation: portrait) {
    border: 15px solid #333;
    width: 50%;
    height: 50%;
    margin-left: 8%;
  }

  @media only screen and (min-width: 200px) and (max-width: 479px) and (orientation: portrait) {
    border: 10px solid #333;
    width: 70%;
    height: 50%;
    margin-left: 4%;
    margin-top: 35%;
  }
`;

export const Description = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background-color: #fff;
  width: 35%;
  height: 75%;
  margin-left: -5%;
  margin-top: -10%;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: 200px) and (max-width: 699px) and (orientation: portrait) {
    margin-left: -65%;
    margin-top: -70%;
    width: 85%;
    height: 45%;
  }

  h1 {
    color: #111;
    font-family: 'Be Vietnam';

    margin-top: 2%;
    margin-left: 5%;

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
    width: 85%;

    color: #111;
    font-family: 'Be Vietnam';
    text-align: left;

    @media only screen and (min-width: 1700px) and (orientation: landscape) {
      font-size: 18px;
    }

    @media only screen and (min-width: 1200px) and (max-width: 1699px) and (orientation: landscape) {
      font-size: 12px;
    }

    @media only screen and (min-width: 800px) and (max-width: 1199px) and (orientation: landscape) {
      font-size: 10px;
    }

    @media only screen and (min-width: 700px) and (max-width: 1000px) and (orientation: portrait) {
      font-size: 12px;
    }

    @media only screen and (min-width: 200px) and (max-width: 699px) and (orientation: portrait) {
      font-size: 7.5px;
    }
  }
`;

export const Botao = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background-color: #f78f2d;
  width: 16%;
  height: 10%;
  margin-left: -17%;
  margin-top: 35%;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    @media only screen and (min-width: 1700px) {
      font-size: 22px;
    }
    @media only screen and (min-width: 1200px) and (max-width: 1699px) {
      font-size: 18px;
    }
  }
`;
