import styled from 'styled-components';

export const Fundo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  margin-top: -15%;
  width: 100%;
  height: 180vh;
  background-color: #fff;
`;

export const F1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  width: 100%;
  height: 85%;
  background-color: #fff;
`;

export const F2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 15%;
  background-color: #333;
`;

export const QuadroVantagens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 98%;
  height: 103%;
  background-color: #fff;
  margin-left: -2%;
  margin-top: -5%;

  box-shadow: 5px 5px 22px -1px rgba(68, 68, 68, 0.75);
  z-index: 4;

  h1 {
    color: #333;
    font-family: 'Be Vietnam';
    font-size: 35px;
    border-bottom: 1px solid #f78f2d;
    margin-top: 10px;
  }

  div {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;

    form {
      display: flex;
      flex-direction: column;
      margin-top: 2%;

      input {
        border-left: none;
        border-top: none;
        border-right: none;
        border-bottom: 1px solid #aaa;
        height: 44px;
        margin: 3px;
        color: #333;
        font-family: 'Be Vietnam';
        font-size: 16px;
        padding: 0 15px;
      }

      h2 {
        margin-top: 30px;
        margin-left: 10%;
        width: 80%;
        text-align: center;
        color: #333;
        font-family: 'Be Vietnam';
        font-size: 25px;
      }

      h3 {
        margin-top: 30px;
        width: 100%;
        text-align: left;
        color: #333;
        font-family: 'Be Vietnam';
        font-size: 20px;
      }

      button {
        height: 44px;
        width: 30%;
        background: #f78f2d;
        margin-left: 35%;
        color: #fff;
        font-weight: bold;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        font-family: 'Be Vietnam';
        font-size: 20px;
        margin-top: 10%;
      }
    }
  }
`;

export const QuadroVantagensSombra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 60%;
  height: 80%;
  background-color: #f78f2d;
  margin-top: -12%;
  margin-left: 3%;
  margin-bottom: 3%;
  box-shadow: 5px 5px 22px -1px rgba(68, 68, 68, 0.75);
  z-index: 3;
`;

export const DadosRodape = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 60%;
  height: 70%;
  background-color: #333;

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 16px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .icone {
    margin-top: 3px;
    margin-left: 15px;
  }
`;

export const DadosRodape2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 60%;
  height: 30%;
  background-color: #333;
  h1 {
    color: #777;
    font-family: 'Be Vietnam';
    font-size: 16px;
  }
`;
