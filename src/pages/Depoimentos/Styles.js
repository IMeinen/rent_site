import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  height: 92vh;
  background-color: #f78f2d;
  margin-top: -5%;
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 60%;
  height: 60%;
  background-color: #fff;
  margin-top: 2%;

  div.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1%;

    h1 {
      @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
      color: #333;
      font-family: 'Be Vietnam';
      font-size: 35px;
      border-bottom: 1px solid #f78f2d;
    }
  }

  div .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1%;
    background-color: #000;
    width: 90%;
    height: 90%;
  }
`;
