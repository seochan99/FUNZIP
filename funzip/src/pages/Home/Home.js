import React, { useEffect, useRef, useState } from 'react';
import CalVideolSection from './CalVideolSection';
import styled from 'styled-components';

const Container = styled.div``;

export default function Home() {
  return (
    <Container>
      {/* <TitleSection /> */}
      <CalVideolSection />
    </Container>
  );
}
