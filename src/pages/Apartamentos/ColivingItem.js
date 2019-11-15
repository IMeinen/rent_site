import React from 'react';

import {
  ContainerImg,
  Imagem,
  Descricao,
  StyledPointer,
  Botao,
} from './Styles';
import Logo from '../Main/images/logo_so_cama.svg';

const Nomes = ['Riachuelo', 'Vigário', 'Universitário'];
const Endereço = [
  'Rua Riachuelo,714',
  'Rua Vigário José Inácio, 829',
  'Av. João Pessoa, 61',
];

export default function Main(props) {
  return (
    <>
      <ContainerImg>
        <Imagem Col={props.Col}>
          <div>
            <StyledPointer />
            <img src={Logo} alt="logo" />
          </div>
        </Imagem>
        <Descricao Col={props.Col}>
          <h1>{Nomes[props.Col - 1]}</h1>
          <h2>Porto Alegre</h2>
          <h2>Centro Histórico</h2>
          <h2>{Endereço[props.Col - 1]}</h2>
          <Botao>
            <h1>Saiba Mais + </h1>
          </Botao>
        </Descricao>
      </ContainerImg>
    </>
  );
}
