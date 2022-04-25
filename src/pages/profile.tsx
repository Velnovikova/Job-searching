import MainLayout from '../layout/main';
import Form from '../component/form';
import { Content } from '../style/style';
export default function Profile() {
  return (
    <MainLayout>
      <h2>Profile</h2>
      <Content>
        <Form />
      </Content>
    </MainLayout>
  );
}