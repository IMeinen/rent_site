import styled from 'styled-components';

export const Fundo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top: 60px;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Description = styled.div`
  width: 100%;
  height: 10vh;
  position: relative;
  background-color: #333;

  h1,
  h2 {
    width: 95%;
    color: #fff;
    font-family: 'Be Vietnam';
    vertical-align: center;
    margin-left: 2%;
    background-color: transparent;
  }

  h1 {
    font-size: 18px;
    @media only screen and (min-width: 1100px) {
      margin-top: 10px;
      font-size: 20px;
    }
  }

  h2 {
    font-size: 14px;
    margin-top: 2%;
    @media only screen and (min-width: 1100px) {
      margin-top: 10px;
      font-size: 14px;
    }
  }
`;

export const FirstSection = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background: #fff;
  width: 90%;
  margin-left: 5%;
  position: relative;

  z-index: 3;
  margin-top: 5%;
  margin-bottom: 5%;
  vertical-align: center;
  @media only screen and (min-width: 1100px) {
    margin-top: 2%;
    margin-bottom: 0px;
  }
  p {
    color: #222;
    font-family: 'Be Vietnam';
    font-size: 14px;
    margin: 5%;
    width: 80%;
    text-align: left;
    font-weight: bolder;
    display: inline-block;
    @media only screen and (min-width: 1100px) {
      font-size: 20px;
    }
  }
`;

export const ColivingSection = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background: #fff;
  width: 90%;
  margin-left: 5%;
  position: relative;
  z-index: 3;
  margin-top: 5%;
  margin-bottom: 5%;
  vertical-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
