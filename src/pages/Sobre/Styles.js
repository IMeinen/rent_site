import styled from 'styled-components';
import FundoDiagonal from '../Main/images/fundo_diagonal.svg';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 110vh;
  background-image: url(${FundoDiagonal});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 25%;
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
  background-color: #f78f2d;
  margin-top: -12%;
  margin-left: 3%;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  width: 75%;
  height: 60%;

  z-index: 3;
`;

export const ContentInt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 98%;
  height: 103%;
  background-color: #fff;
  z-index: 4;

  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  margin-left: -0.5%;
  margin-top: -3%;
`;
export const Meio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 50%;
  height: 100%;

  h1 {
    color: #333;
    font-family: 'Be Vietnam';
    font-size: 40px;

    margin-top: 5%;
    margin-left: 10%;
  }

  p {
    margin-top: 3%;
    margin-left: 10%;
    width: 70%;
    font-size: 22px;
    color: #333;
    font-family: 'Be Vietnam';
    text-align: left;
  }
`;

export const Missao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 90%;
  height: ${props => (props.missao ? '40%' : '45%')};
  margin-top: ${props => (props.missao ? '5%' : '3%')};
  margin-right: 5%;

  background-color: ${props => (props.missao ? '#f78f2d' : '#333333')};

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 35px;

    margin-top: 3%;
    margin-left: 5%;
  }

  p {
    margin-top: 0px;
    margin-left: 5%;
    width: 70%;
    font-size: 20px;
    color: #fff;
    font-family: 'Be Vietnam';
    text-align: left;
  }

  ul {
    width: 80%;
    height: 80%;
  }
`;
