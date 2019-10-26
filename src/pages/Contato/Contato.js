import React from 'react';

import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

import {
  Fundo,
  F1,
  F2,
  QuadroVantagens,
  QuadroVantagensSombra,
  DadosRodape,
  DadosRodape2,
} from './Styles';

// import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Fundo>
        <F1>
          <QuadroVantagensSombra>
            <QuadroVantagens>
              <h1>FALE CONOSCO</h1>
              <div>
                <form>
                  <input placeholder="Nome completo" />
                  <input placeholder="Email" />
                  <input placeholder="Telefone" />
                </form>
              </div>
            </QuadroVantagens>
          </QuadroVantagensSombra>
        </F1>
        <F2>
          <DadosRodape>
            <h1>Rua Riachuelo,714 - Centro Histórico </h1>
            <div>
              <FaWhatsapp color="#fff" size={22} className="icone" />
              <h1>(51) 99999-9999</h1>
            </div>
            <h1>rentcoliving@gmail.com </h1>
            <div>
              <FaFacebook color="#fff" size={22} className="icone" />
              <FaInstagram color="#fff" size={22} className="icone" />
            </div>
          </DadosRodape>
          <DadosRodape2>
            <h1>
              Todos os direitos reservados - RENTCOLIVING - 2019 - Feito por:
              Artur Meinen
            </h1>
          </DadosRodape2>
        </F2>
      </Fundo>
    </>
  );
}
