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
    transform: translateX(10%);

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

      word-spacing: normal;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      text-align: start;
      -webkit-rtl-ordering: logical;

      @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
        font-size: 14px;
      }
    }
  }
`;
