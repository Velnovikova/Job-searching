import React from 'react';
import Header from '../component/Header';
import Menu from '../component/Menu';
import { Content } from '../style/style';
export default function Invoices() {
    return (
      <main>
        <Header />
        <Content>
        <h2>Invoices</h2>
          <Menu />
        </Content>
      </main>
    );
  }