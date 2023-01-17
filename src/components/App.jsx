import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from '../style/GlobalStyle';
import { PageContainer } from './PageContainer/PageContainer';

const Calculator = lazy(() => import('../pages/CalculatorPage'));

export const App = () => {
  return (
    <>
      {/* ці стилі застовуються до всієї апки та скинуть наші налаштування */}
      <GlobalStyle />

      <PageContainer>
        {/* тут будем рендерити всю розмітку в головному контейнері */}
        <Routes>
          <Route
            path='calculator'
            element={<Calculator/>}
          />
        </Routes>
        
      </PageContainer>
    </>
  );
};
