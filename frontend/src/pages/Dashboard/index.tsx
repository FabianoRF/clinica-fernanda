import React from 'react';
import { FiSearch, FiMaximize2 } from 'react-icons/fi';

import Header from '../../components/Header';

import { Content, Table } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <Content>
        <div>
          <div>
            <FiSearch size="24" color="#fff" />
            <input type="text" placeholder="Digite aqui o que voce procura." />
          </div>
          <button type="submit">Buscar</button>
        </div>

        <Table>
          <h3>Nomes:</h3>

          <div>
            <span>Maria das Graças Pires</span>
            <button type="button">
              <FiMaximize2 size="22" color="#fff" />
              Mais Detalhes
            </button>
          </div>

          <div>
            <span>Maria das Graças Pires</span>
            <button type="button">
              <FiMaximize2 size="22" color="#fff" />
              Mais Detalhes
            </button>
          </div>

          <div>
            <span>Maria das Graças Pires</span>
            <button type="button">
              <FiMaximize2 size="22" color="#fff" />
              Mais Detalhes
            </button>
          </div>
        </Table>
      </Content>
    </>
  );
};

export default Dashboard;
