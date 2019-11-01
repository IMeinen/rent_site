import styled from 'styled-components';
import Fundoimg from '../Main/images/rent_riachuelo.jpg';

export const Fundo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: -5%;
  width: 100%;
  height: 260vh;
`;

export const Content = styled.div`
  width: 80%;
  padding-bottom: 0px;
  margin-bottom: 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90%;

  /* @media (min-width: 1200px) {
    margin-top: 5%;
  } */

  /* tablet*/
  /*
  @media only screen and (min-width: 768px) and (max-width: 1199px) and (-webkit-min-device-pixel-ratio: 1.5) {
    margin-top: 10%;
  }*/
  /* celular */
  /*
  @media only screen and (min-width: 240px) and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 1.5) {
    margin-top: 15%;
  } */
`;

export const Header = styled.div`
  width: 100%;

  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 5%;

  h1 {
    color: #333;
    font-family: 'Be Vietnam';
    font-size: 40px;
    border-bottom: 1px solid #f78f2d;
  }
`;

// export const Ape1 = styled.div`
//   @media (min-width: 1200px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     margin-left: 3%;
//     margin-right: 3%;
//     width: 20%;
//     height: 42%;
//     z-index: 3;
//     background-color: #f7f7f7;
//   }

//   text-align: center;
//   h1 {
//     @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');
//     font-family: 'Be Vietnam';
//     font-size: 36px;
//     margin-top: 10%;

//     color: #000;
//   }
// `;
// export const Ape2 = styled.div`
//   @media (min-width: 1200px) {
//     -webkit-box-shadow: 5px 14px 20px 3px rgba(58, 58, 58, 0.74);
//     box-shadow: 5px 14px 20px 3px rgba(58, 58, 58, 0.74);
//     width: 20%;
//     height: 42%;
//     margin-left: 1%;
//     margin-right: 1%;
//     margin-top: 2%;
//     margin-bottom: 2%;
//     background-color: #f7f7f7;
//   }

//   text-align: center;
//   h1 {
//     @import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');
//     font-family: 'Amatic SC', cursive;
//     font-size: 36px;
//     margin-top: 10%;

//     color: #000;
//   }
// `;

// export const Ape3 = styled.div`
//   @media (min-width: 1200px) {
//     -webkit-box-shadow: 5px 14px 20px 3px rgba(58, 58, 58, 0.74);
//     box-shadow: 5px 14px 20px 3px rgba(58, 58, 58, 0.74);
//     width: 20%;
//     height: 42%;
//     margin-left: 1%;
//     margin-right: 15%;
//     margin-top: 2%;
//     margin-bottom: 2%;
//     background-color: #f7f7f7;
//   }
//   vertical-align: text-top;
//   text-align: center;

//   text-align: center;
//   h1 {
//     @import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');
//     font-family: 'Amatic SC', cursive;
//     font-size: 36px;
//     margin-top: 10%;

//     color: #000;
//   }
// `;

// export const Colv = styled.div`
//   @media (min-width: 1200px) {
//     width: 88%;
//     height: 65%;
//     margin-left: 6%;
//     margin-right: 6%;
//     margin-top: 6%;
//     margin-bottom: 2%;
//     display: flex;
//     align-items: flex-start;
//     justify-content: flex-start;

//     background-color: #222;
//     background-size: cover;
//     z-index: 7;

//     background-image: url(${Fundoimg});
//   }
// `;

// export const MyPin = styled.div`
//   @media (min-width: 1200px) {
//     width: 100%;
//     height: 65%;
//     margin-left: 40%;
//     margin-top: -10%;
//     background-image: url(${Pin});
//     background-repeat: no-repeat;
//   }
// `;

export const ContainerApart = styled.div`
  width: 60%;
  height: 13%;
  display: flex;
  flex-direction: row;

  background-color: #fff;
`;

export const ContainerApartRightL = styled.div`
  width: 60%;
  height: 100%;

  background-image: url(${Fundoimg});
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    transform: scale(1.01);
  }
`;
export const ContainerApartRightR = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
`;

export const Descript = styled.div`
  width: 100%;
  height: 60%;

  background-color: #333;

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 20px;
    padding-left: 3%;
    padding-top: 3%;
  }

  h2 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 16px;
    padding-left: 3%;
    padding-top: 1%;
  }
`;

export const Efeitotransparente = styled.div`
  width: 100%;
  height: 100%;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(51, 51, 51, 1) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-left: 3%;
  padding-bottom: 3%;

  h1 {
    color: #fff;
    font-family: 'Be Vietnam';
    font-size: 35px;
  }
`;
