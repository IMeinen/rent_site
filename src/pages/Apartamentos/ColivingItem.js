import React from 'react';

import {
  ContainerImg,
  Imagem,
  Descricao,
  StyledPointer,
  MyLink,
} from './Styles';
import Logo from '../Main/images/logo_so_cama1.svg';
import Logo2 from '../Main/images/logo_so_cama2.svg';

const Nomes = ['Riachuelo', 'Vigário', 'Universitário', 'BomFim'];
const Endereço = [
  'Rua Riachuelo,714',
  'Rua Vigário José Inácio, 829',
  'Av. João Pessoa, 61',
  'endereço do bom fim',
];

class ColivingItem extends React.Component {
  state = { hovered: false };

  HandleHover = () => {
    this.setState({ hovered: !this.state.hovered });
    console.log(this.state.hovered);
  };

  render() {
    return (
      <>
        <MyLink >
          <ContainerImg>
            <Imagem
              Col={this.props.Col}
              Estilizar={this.state.hovered}
              onMouseEnter={this.HandleHover}
              onMouseLeave={this.HandleHover}
            >
              <div>
                <StyledPointer Estilizar={this.state.hovered} />
                <img src={this.state.hovered ? Logo2 : Logo} alt="logo" />
              </div>
            </Imagem>
            <Descricao
              Col={this.props.Col}
              onMouseEnter={this.HandleHover}
              onMouseLeave={this.HandleHover}
            >
              <div>
                <h1>RENT COLIVING - {Nomes[this.props.Col - 1]}</h1>

                <h3>
                  Porto Alegre - Centro Histórico -{' '}
                  {Endereço[this.props.Col - 1]}{' '}
                </h3>
              </div>
              {/* <Botao>
              <Link className="link" to="colivings/2">
                Saiba Mais +
              </Link>
            </Botao> */}
            </Descricao>
          </ContainerImg>
        </MyLink>
      </>
    );
  }
}

export default ColivingItem;
