import React from 'react';

import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

import {
  Footer,
  FirstSection,
  SecondSection,
  DadosRodape,
  DadosRodape2,
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
  return (
    <Footer>
      <FirstSection>
        <form className="Meuform">
          <h4>CONTATO</h4>
          <h2>
            Entre em contato para nos conhecermos melhor! E responda este breve
            questionário para melhor entender suas intenções de moradia e poder
            oferecer as opções ideais!
          </h2>
          <input name="Nome" placeholder="Nome completo" />
          <input name="Email" placeholder="Email" />
          <input name="Instragam" placeholder="Instagram" />
          <input name="Phone" placeholder="Telefone" />
          <div>
            <MyRadioButtonAcademia />
          </div>

          <button type="submit"> ENVIAR</button>
        </form>
      </FirstSection>
      <SecondSection>
        <DadosRodape>
          <h1>Vigário José Inácio 827 - Centro Histórico - Porto Alegre</h1>
          <div>
            <FaWhatsapp color="#fff" size={14} className="icone" />
            <h1>(51) 99999-9999</h1>
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
  );
}
