import Header from "../component/Header"
import react from 'react'
import { Content } from "../style/style";
import MainLayout from "../layout/main";
import MenuResumes from "../component/MenuResumes";
import MenuSearch from "../component/MenuSearch";
export default function Resumes() {
  return (
    <MainLayout>
      <Content>
        <MenuSearch title={'Cпециалисты'}/>
        <MenuResumes />
      </Content>
    </MainLayout>
  );
}
