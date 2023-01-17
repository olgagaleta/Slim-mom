import { register } from 'redux/auth/auth-options';
import { GlobalStyle } from '../style/GlobalStyle';
import { PageContainer } from './PageContainer/PageContainer';

export const App = () => {
  console.log(register());
  return (
    <>
      {/* ці стилі застовуються до всієї апки та скинуть наші налаштування */}
      <GlobalStyle />

      <PageContainer>
        {/* тут будем рендерити всю розмітку в головному контейнері */}
      </PageContainer>
    </>
  );
};
