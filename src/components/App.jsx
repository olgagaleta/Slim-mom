import { GlobalStyle } from '../style/GlobalStyle';
import { PageContainer } from './PageContainer/PageContainer';

export const App = () => {
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
