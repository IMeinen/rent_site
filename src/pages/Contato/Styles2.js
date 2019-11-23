import styled from 'styled-components';

export const Footer = styled.footer`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background: #000;
  width: 100%;
  position: relative;
  z-index: 3;
  vertical-align: baseline;
`;

export const FirstSection = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  background: #ddbc2f;
  width: 100%;

  position: relative;
  z-index: 3;

  border-width: 70px 0 0 99vw;
  vertical-align: baseline;

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

        }
        @media only screen and (min-width: 768px) and (max-width: 2000px) and (orientation: portrait) {
          height: 20px;
          font-size: 8px;
          padding: 0px;

        }
        @media only screen and (min-width: 1px) and (max-width: 199px) and (orientation: portrait) {
          height: 20px;
          font-size: 8px;
          padding: 0px;

        }
      }

`;
