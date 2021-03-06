import styled from 'styled-components';
import { slide } from 'react-burger-menu';

export const StyledMenu = styled(slide)`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:100&display=swap');

  font-family: 'Be Vietnam';
`;

export const MenuDiv = styled.div`
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;
