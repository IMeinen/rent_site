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
                <h2>
                  Para entender um pouco mais sobre sua necessidade e oferecer a
                  melhor opção de moradia, poderia responder as seguintes
                  perguntas?
                </h2>
                <h3>
                  Qual o valor você pretende gastar com todas as contas
                  inclusas?
                </h3>
                <input />
                <h3>Quando você gostaria de se mudar e por quanto tempo?</h3>
                <input />
                <h3>
                  O que te atrai em morar em um coliving e o que você traria de
                  bom para o nosso coliving?
                </h3>
                <input />
                <h3>O que você estuda ou trabalha ? Onde?</h3>
                <input />
                <h3>O Onde você morava antes?</h3>
                <input />
                <h3>Como nos descobriu?</h3>
                <input />
                <button type="submit"> ENVIAR</button>
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
  );
}
