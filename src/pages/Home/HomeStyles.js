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
  border: 30px solid #333;
  width: 40%;
  height: 90%;
  margin-left: 15%;
`;

export const Description = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background-color: #fff;
  width: 35%;
  height: 75%;
  margin-left: -5%;
  margin-top: -10%;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);

  h1 {
    color: #333;
    font-family: 'Be Vietnam';
    font-size: 40px;

    margin-top: 5%;
    margin-left: 10%;
  }

  p {
    margin-top: 1%;
    margin-left: 10%;
    width: 80%;
    font-size: 18px;
    color: #333;
    font-family: 'Be Vietnam';
    text-align: left;
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
    font-size: 22px;
  }
`;
