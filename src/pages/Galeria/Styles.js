import styled from 'styled-components';

export const Fundo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background-color: #f78f2d;
`;

export const Content = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 90%;
  background-color: #fff;
`;

export const Header = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 10%;
  background-color: #fff;

  h1 {
    color: #333;
    font-family: 'Be Vietnam';
    font-size: 40px;
    border-bottom: 1px solid #f78f2d;
  }

  h2 {
    color: #333;
    font-family: 'Be Vietnam';
    font-size: 22px;
    border-bottom: 1px solid #f78f2d;
  }
`;

export const Content2 = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-around;
  height: 80%;
  background-color: #fff;
`;

export const Foto = styled.div`
  width: 150px;
  height: 150px;
  margin: 4px;
  background-color: #333;
`;
