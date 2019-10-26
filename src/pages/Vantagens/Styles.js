import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 3;
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
  box-shadow: 5px 5px 22px -1px rgba(68, 68, 68, 0.75);
  z-index: 3;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-wrap: nowrap;
  width: 100%;
  height: 20%;
  background-color: #fff;
  z-index: 5;

  h1 {
    @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

    color: #333;
    font-family: 'Be Vietnam';
    font-size: 40px;
    border-bottom: 1px solid #f78f2d;
  }
`;

export const VantagensGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75%;
  height: 75%;

  background-color: #fff;

  z-index: 4;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 28%;
  height: 28%;
  margin: 1%;

  background-color: #fff;
  -webkit-box-shadow: 5px 5px 16px 5px rgba(46, 46, 46, 0.37);
  box-shadow: 5px 5px 16px 5px rgba(46, 46, 46, 0.37);

  z-index: 4;
  &:hover {
    background-color: #333;
    color: #fff;
    h1 {
      color: #fff;
    }

    .Item {
      color: #fff;
    }
  }
  h1 {
    color: #333;
    font-family: 'Be Vietnam';
    font-size: 20px;
    text-align: center;
    vertical-align: middle;
    width: 60%;
  }

  .Item {
    color: #333;
  }
`;
