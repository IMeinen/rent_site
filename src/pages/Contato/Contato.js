import React, { useState, useRef } from 'react';

import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Element } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import {
  Footer,
  FirstSection,
  SecondSection,
  DadosRodape,
  DadosRodape2,
  DadosContatoINSTA,
  DadosContatoWATS,
} from './Styles2';
import MyRadioButtonAcademia from './MyRadioButtonAcademia';

// export default function Main() {
//   return (
//     <Fundo>
//       <F1>
//         <QuadroVantagens>
//           <h1>FALE CONOSCO</h1>
//           <div>
//             <form className="Meuform">
//               <h2>
//                 Entre em contato para nos conhecermos melhor! E responda este
//                 breve questionário para melhor entender suas intenções de
//                 moradia e poder oferecer as opções ideais!
//               </h2>
//               <input name="Nome" placeholder="Nome completo" />
//               <input name="Email" placeholder="Email" />
//               <input name="Phone" placeholder="Telefone" />
//               <MyRadioButtonAcademia />
//               <h3>Onde você mora atualmente?</h3>
//               <input
//                 name="Moradia atual"
//                 placeholder="Onde você mora atualmente?"
//               />
//               <button type="submit"> ENVIAR</button>
//             </form>
//           </div>
//         </QuadroVantagens>
//       </F1>
//       {/* <F2>
// <DadosRodape>
//   <h1>Vigário José Inácio 827 - Centro Histórico - Porto Alegre</h1>
//   <div>
//     <FaWhatsapp color="#fff" size={22} className="icone" />
//     <h1>(51) 99999-9999</h1>
//   </div>
//   <h1>rentcoliving@gmail.com </h1>
//   <div>
//     <FaFacebook color="#fff" size={22} className="icone" />
//     <FaInstagram color="#fff" size={22} className="icone" />
//   </div>
// </DadosRodape>
// <DadosRodape2>
//   <h1>
//     Todos os direitos reservados - RENTCOLIVING - 2019 - Feito por:
//     Artur Meinen
//   </h1>
// </DadosRodape2>
//       </F2> */}
//     </Fundo>
//   );
// }

export default function Main() {
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  const handleSubmit = ev => {
    ev.preventDefault();
    // setLoading(true);

    if (!nameRef.current.value || phoneRef.current.value) {
      toast.error('É necessário preencher nome e telefone!');
    } else {
      const form = ev.target;
      const data = new FormData(form);

      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          setStatus({ status: 'SUCCESS' });
        } else {
          setStatus({ status: 'ERROR' });
        }
      };
      xhr.send(data);
      setLoading(false);
      toast.success('Obrigado por enviar!');
    }
  };

  return (
    <Element
      name="Contato"
      style={{
        paddingTop: '80px',
      }}
    >
      <Footer>
        <FirstSection>
          {loading && (
            <div className="loading-box">
              <Loading />
            </div>
          )}
          {!loading && (
            <form
              className="Meuform"
              onSubmit={event => handleSubmit(event)}
              action="https://formspree.io/f/mgerwprw"
              method="POST"
            >
              <h4>CONTATO</h4>
              <h2>Entre em contato para nos conhecermos melhor!</h2>
              <input name="Nome" placeholder="Nome completo" ref={nameRef} />
              <input name="Email" placeholder="Email" />
              <input name="Instragam" placeholder="Instagram" />
              <input name="Phone" placeholder="Telefone" ref={phoneRef} />
              <div className="input_box">
                <h1>Qual modalidade de moradia que você procura?</h1>
                <label className="container">
                  Quarto individual
                  <input
                    type="radio"
                    checked="checked"
                    name="tipo_de_quarto"
                    value="quarto_individual"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Studio
                  <input
                    type="radio"
                    checked="checked"
                    name="tipo_de_quarto"
                    value="studio"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Suíte
                  <input
                    type="radio"
                    checked="checked"
                    name="tipo_de_quarto"
                    value="suite"
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="input_box">
                <h1>Qual bairro você procura moradia?</h1>
                <label className="container">
                  Próximo da UFRGS
                  <input
                    type="radio"
                    checked="checked"
                    name="bairro_moradia"
                    value="proximo_a_ufrgs"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Próximo do Gasômetro
                  <input
                    type="radio"
                    checked="checked"
                    name="bairro_moradia"
                    value="proximo_do_gasometro"
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="input_box">
                <h1>Qual tamanho de Coliving que você gostaria de morar?</h1>
                <label className="container">
                  Até 10 moradores
                  <input
                    type="radio"
                    checked="checked"
                    name="tamanho_coliving"
                    value="ate_10_moradores"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Até 20 moradores
                  <input
                    type="radio"
                    checked="checked"
                    name="tamanho_coliving"
                    value="ate_20_moradores"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Até 30 moradores
                  <input
                    type="radio"
                    checked="checked"
                    name="tamanho_coliving"
                    value="ate_30_moradores"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Não importa
                  <input
                    type="radio"
                    checked="checked"
                    name="tamanho_coliving"
                    value="nao_importa"
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="input_box">
                <h1>
                  Qual valor você pretende gastar com todas as contas inclusas?
                </h1>
                <label className="container">
                  Até R$750
                  <input
                    type="radio"
                    checked="checked"
                    name="preco_maximo"
                    value="ate_750"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Até R$850
                  <input
                    type="radio"
                    checked="checked"
                    name="preco_maximo"
                    value="ate_850"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Até R$1000
                  <input
                    type="radio"
                    checked="checked"
                    name="preco_maximo"
                    value="ate_1000"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Até R$1300
                  <input
                    type="radio"
                    checked="checked"
                    name="preco_maximo"
                    value="ate_1300"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Até R$1500
                  <input
                    type="radio"
                    checked="checked"
                    name="preco_maximo"
                    value="ate_1500"
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="input_box">
                <h1>O que você faz?</h1>
                <label className="container">
                  Trabalho
                  <input
                    type="radio"
                    checked="checked"
                    name="o_que_faz"
                    value="trabalho"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Estudo
                  <input
                    type="radio"
                    checked="checked"
                    name="o_que_faz"
                    value="estudo"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Ambos
                  <input
                    type="radio"
                    checked="checked"
                    name="o_que_faz"
                    value="ambos"
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="input_box">
                <h1>Como você conheceu a Rent Coliving?</h1>
                <label className="container">
                  Facebook
                  <input
                    type="radio"
                    checked="checked"
                    name="como_conheceu_a_rent"
                    value="facebook"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Instagram
                  <input
                    type="radio"
                    checked="checked"
                    name="como_conheceu_a_rent"
                    value="instagram"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Amigo que mora na Rent
                  <input
                    type="radio"
                    checked="checked"
                    name="como_conheceu_a_rent"
                    value="amigo_que_mora_na_rent"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Busca por colivings na internet
                  <input
                    type="radio"
                    checked="checked"
                    name="como_conheceu_a_rent"
                    value="busca_por_colivings_na_internet"
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  Outros
                  <input
                    type="radio"
                    checked="checked"
                    name="como_conheceu_a_rent"
                    value="outros"
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="input_box">
                <h1>
                  O que te atrai a morar em um coliving?E em que você agregaria
                  para a nossa comunidade?
                </h1>
                <input
                  name="motivos"
                  placeholder="O que te atrai a morar em um coliving?E em que você agregaria
                  para a nossa comunidade?"
                />
              </div>
              <button type="submit"> ENVIAR</button>
              {/* <DadosContatoWATS href="https://wa.me/5551996607940">
              <>
                <FaWhatsapp size={50} color="#fff" />
                <h1>WHATSAPP</h1>
              </>
            </DadosContatoWATS>
            <DadosContatoINSTA href="https://www.instagram.com/rentcoliving/">
              <>
                <FaInstagram size={50} color="#fff" />
                <h1>INSTAGRAM</h1>
              </>
            </DadosContatoINSTA> */}
            </form>
          )}
        </FirstSection>
        <SecondSection>
          <DadosRodape>
            <h1>Vigário José Inácio 829 - Centro Histórico - Porto Alegre</h1>
            <div>
              <FaWhatsapp color="#fff" size={14} className="icone" />
              <h1>(51) 989567225</h1>
            </div>
            <h1>rentcoliving@gmail.com </h1>
            <div>
              <FaFacebook color="#fff" size={14} className="icone" />
              <FaInstagram color="#fff" size={14} className="icone" />
            </div>
          </DadosRodape>
          <DadosRodape2>
            <h1>
              Todos os direitos reservados - RENTCOLIVING - 2019 - Feito por:
              Artur Meinen
            </h1>
          </DadosRodape2>
        </SecondSection>
      </Footer>
    </Element>
  );
}
