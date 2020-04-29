import React from 'react';

import { CustomLoader, Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <CustomLoader type="bars" color="#F7532C" />
    </Container>
  );
}
