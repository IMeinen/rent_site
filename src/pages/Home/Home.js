import React from 'react';

import {
  Content,
  Content2,
  TextBox,
  IMGBox,
  BotaoContato,
  ContainerSlideShow,
} from './HomeStyles';

export default function Main() {
  return (
    <>
      <Content>
        <Content2>
          <TextBox>
            <h1>Um novo jeito de viver!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum viverra sem iaculis metus porta rhoncus. Etiam faucibus
              quam ac nisl dictum, vitae tincidunt lorem posuere. Donec sed
              velit eget orci convallis viverra. Nulla facilisi. Praesent id
              nisl ullamcorper, ullamcorper mauris ut, convallis velit. Vivamus
              non arcu ut nisl tincidunt pharetra. Proin in nunc ut enim
              accumsan iaculis sed nec lacus.
            </p>
            <BotaoContato>
              <h1>Agende já sua visita!</h1>
            </BotaoContato>
          </TextBox>
          <IMGBox>
            <ContainerSlideShow />
          </IMGBox>
        </Content2>
      </Content>
    </>
  );
}
