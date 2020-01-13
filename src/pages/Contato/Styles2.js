import styled from 'styled-components';

export const Footer = styled.footer`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background: transparent;
  width: 100%;
  position: relative;
  z-index: 3;
  vertical-align: baseline;
`;

export const FirstSection = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background: #fff;
  width: 90%;
  margin-left: 5%;
  position: relative;
  z-index: 3;

  vertical-align: baseline;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2%;
    box-sizing: border-box;
    align-items: center;
    input {
      border-left: none;
      border-top: none;
      border-right: none;
      border-bottom: 1px solid #aaa;
      height: 44px;
      width: 90%;
      margin: 3px;
      color: #333;
      font-family: 'Be Vietnam';
      font-size: 14px;
      padding: 0 15px;
      max-width: 80%;
      overflow-wrap: break-word;
      box-sizing: border-box;
    }

    div {
      width: 90%;
      margin-left: 5%;
      margin-top: 5%;
    }

    h4 {
      color: #333;
      font-family: 'Be Vietnam';
      margin-top: 5%;
      border-bottom: 1px solid #f7532c;
      font-size: 36px;

      @media only screen and (min-width: 200px) and (max-width: 767px) {
        font-size: 22px;
      }
    }

    h2,
    h3 {
      color: #333;
      font-family: 'Be Vietnam';
      font-size: 14px;
      margin: 7px 0px 4px 0px;
      width: 80%;
      text-align: center;
      @media only screen and (min-width: 768px) {
        font-size: 22px;
      }
    }

    h3 {
      text-align: left;
    }

    button {
      height: 44px;
      width: 30%;
      background: #f7532c;
      margin: 20px;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-family: 'Be Vietnam';
      font-size: 20px;

      @media only screen and (min-width: 200px) and (max-width: 767px) {
        font-size: 14px;
      }
    }
  }
`;

export const SecondSection = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background: #333;
  width: 100%;
  margin-top: 20px;
  position: relative;
  z-index: 3;

  vertical-align: baseline;
`;

export const DadosRodape = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: #333;
  padding-top: 20px;

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 10px;
    margin: 2px 0px 4px 0px;
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

  width: 100%;
  padding: 2px 0px 4px 0px;
  background-color: #333;

  h1 {
    color: #777;
    font-family: 'Be Vietnam';
    font-size: 16px;
    padding: 2px 0px 4px 0px;
    @media only screen and (min-width: 200px) and (max-width: 767px) {
      font-size: 8px;
    }
  }
`;
export const DadosContatoINSTA = styled.a`
  width: 90%;
  height: 80px;
  border-radius: 4px;
  margin: 5px !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  @media only screen and (min-width: 1100px) {
    width: 500px !important;
    height: 80px !important;
    margin: 20px !important;
  }

  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );

  h1 {
    margin: 5px !important;
    font-size: 18px;
    color: #fff;

    font-family: 'Be Vietnam';
  }
`;

export const DadosContatoWATS = styled.a`
  width: 90%;
  height: 80px;
  border-radius: 4px;
  margin: 5px !important;
  background: linear-gradient(#69ca3b, #56a61e);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  @media only screen and (min-width: 1100px) {
    width: 500px !important;
    height: 80px !important;
    margin: 20px !important;
  }

  h1 {
    margin: 5px !important;
    font-size: 18px;
    color: #fff;
    font-family: 'Be Vietnam';
  }
`;
