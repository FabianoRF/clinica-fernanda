import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, HeaderOptions } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <Logo>
          <h1>Fernanda Ruth</h1>
          <span>Esteticista e Cosmetóloga</span>
        </Logo>
        <HeaderOptions>
          <Link to="/">Procurar</Link>
          <Link to="/register">Cadastrar</Link>
        </HeaderOptions>
      </div>
    </Container>
  );
};

export default Header;
