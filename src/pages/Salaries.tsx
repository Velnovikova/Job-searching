import React from 'react'
import Header from '../component/Header';
import Menu from '../component/Menu';
import { Content } from '../style/style';
export default function Salaries() {
    return (
      <main>
          <Header />
          <Content>
          <h2>Salaries</h2>
          <Menu />
        </Content>
      </main>
    );
  }