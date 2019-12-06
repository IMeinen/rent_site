import styled from 'styled-components';

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  background-color: #f7532c;

  @media only screen and (min-width: 200px) and (max-width: 767px) {
    height: 100vh;
  }
  z-index: 3;

  /*
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 25%; */
`;

export const QuadroVantagens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 90%;
  height: 95%;

  background-color: #fff;

  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
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
  background-color: #e74d29;
  margin-top: -2%;
  margin-left: 3%;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 3;
  @media only screen and (min-width: 1000px) and (max-width: 1500px) {
    width: 65%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1100px) {
    width: 75%;
    height: 60%;
  }

  @media only screen and (min-width: 200px) and (max-width: 767px) {
    width: 90%;
    height: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 15%;
  background-color: #fff;
  z-index: 5;
  margin-top: 1%;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    height: 10%;
  }

  h1 {
    color: #333;
    font-family: 'Be Vietnam';

    border-bottom: 1px solid #f78f2d;

    @media only screen and (min-width: 200px) and (max-width: 767px) {
      font-size: 22px;
    }
  }
`;

export const VantagensGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  height: 92%;
  background-color: #fff;
  z-index: 4;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 23%;
  height: 27%;
  margin: 1%;
  background-color: #fff;

  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 4;

  @media only screen and (min-width: 1301px) {
    height: 28%;
  }

  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    height: 23%;
  }

  @media only screen and (min-width: 200px) and (max-width: 767px) {
    width: 45%;
    height: 15%;
  }

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
    font-size: 22px;
    text-align: center;
    vertical-align: middle;

    width: 60%;
    @media only screen and (min-width: 1301px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 1000px) and (max-width: 1300px) {
      font-size: 12px;
    }

    @media only screen and (min-width: 768px) and (max-width: 999px) {
      font-size: 10px;
    }

    @media only screen and (min-width: 200px) and (max-width: 767px) {
      font-size: 10px;
    }
  }
  .Item {
    color: #333;
    font-size: 46px;

    @media only screen and (min-width: 200px) and (max-width: 1200px) {
      font-size: 16px;
    }
  }
`;
