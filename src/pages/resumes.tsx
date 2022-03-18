import Header from "../component/Header"
import react from 'react'
import Menu from "../component/Menu";
import { Content } from "../style/style";
export default function Resumes() {
    return (
      <main>
        <Header />
        <Content>
        <h2>Resumes</h2>
          <Menu />
        </Content>
      </main>
    );
  }
  