import React from 'react';

import { Container, ContentDiv, ContentInt, Meio, Missao } from './Styles';

// import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Container>
        <ContentDiv>
          <ContentInt>
            <Meio>
              <h1>Sobre nós</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum viverra sem iaculis metus porta rhoncus. Etiam
                faucibus quam ac nisl dictum, vitae tincidunt lorem posuere.
                Donec sed velit eget orci convallis viverra. Nulla facilisi.
                Praesent id nisl ullamcorper, ullamcorper mauris ut, convallis
                velit. Vivamus non arcu ut nisl tincidunt pharetra. Proin in
                nunc ut enim accumsan iaculis sed nec lacus.
              </p>
            </Meio>
            <Meio>
              <Missao missao>
                <h1>Nossa missão</h1>
                <p>
                  Nossa missão como empresa é ... Donec sed velit eget orci
                  convallis viverra. Nulla facilisi. Praesent id nisl
                  ullamcorper, ullamcorper mauris ut, convallis velit. Vivamus
                  non arcu ut nisl tincidunt pharetra. Proin in nunc ut enim
                  accumsan iaculis sed nec lacus.
                </p>
              </Missao>
              <Missao valores>
                <h1>Nossos valores</h1>

              </Missao>
            </Meio>
          </ContentInt>
        </ContentDiv>
      </Container>
    </>
  );
}
