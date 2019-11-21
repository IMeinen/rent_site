import styled from 'styled-components';
import FormLabel from '@material-ui/core/FormLabel';

export const Fundo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  margin-top: -15%;
  width: 100%;
  height: 220vh;
  background: linear-gradient(to right, #f78f2d, #f7532c);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
    height: 320vh;
  }
`;

export const F1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85%;
  background: linear-gradient(to right, #f78f2d, #f7532c);
  position: relative;
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
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 300px;
  height: 1500px;
  background-color: #fff;
  position: relative;

  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 4;

  h1 {
    color: #333;
    font-family: 'Be Vietnam';
    font-size: 35px;
    border-bottom: 1px solid #f78f2d;
    margin-top: 10px;
    @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
      font-size: 18px;
    }
  }

  div {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;

    form {
      display: flex;
      flex-direction: column;
      margin-top: 2%;
      box-sizing: border-box;

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
        max-width: 80%;
        overflow-wrap: break-word;
        box-sizing: border-box;
        -webkit-writing-mode: horizontal-tb !important;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        -webkit-rtl-ordering: logical;

        @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
          height: 20px;
          font-size: 8px;
          padding: 0px;
          background-color: #fff;
        }
        @media only screen and (min-width: 768px) and (max-width: 2000px) and (orientation: portrait) {
          height: 20px;
          font-size: 8px;
          padding: 0px;
          background-color: #111;
        }
        @media only screen and (min-width: 1px) and (max-width: 199px) and (orientation: portrait) {
          height: 20px;
          font-size: 8px;
          padding: 0px;
          background-color: #faf;
        }
      }

      h2 {
        margin-top: 30px;
        margin-left: 10%;
        width: 80%;
        text-align: center;
        color: #333;
        font-family: 'Be Vietnam';
        font-size: 25px;
        @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
          font-size: 16px;
        }
      }

      h3 {
        margin-top: 30px;
        width: 100%;
        text-align: left;
        color: #333;
        font-family: 'Be Vietnam';
        font-size: 20px;
        @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
          font-size: 14px;
        }
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
        @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
          font-size: 14px;
        }
      }

      .Options {
        display: flex;
        flex-direction: row;
        font-size: 16px;
        font-family: 'Be Vietnam';
        color: #333;
        margin-top: 2%;
      }

      .label {
        font-size: 16px;
        font-family: 'Be Vietnam';
        color: #333;
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
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 3;

  @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
    width: 90%;
  }
`;

export const DadosRodape = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 60%;
  height: 70%;
  background-color: #333;
  @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
    flex-direction: column;
  }

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 16px;
    @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
      font-size: 8px;
    }
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
    @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
      font-size: 4px;
    }
  }
`;

export const StyledLegend = styled(FormLabel)`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  color: #333;
  font-family: 'Be Vietnam';
  font-size: 312px;
`;
