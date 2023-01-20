import CalcForm from 'components/CalcForm';
import { Container } from 'components/Container';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { MainGrid, ThemeSwitcherBox } from './Home.styled';

import { selectDarkTheme } from 'redux/darkTheme/selectors.darkTheme';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const isDark = useSelector(selectDarkTheme);
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#424242' : 'white';
  }, [isDark]);

  return (
    <Container>
      <MainGrid>
        <CalcForm />
      </MainGrid>
      <ThemeSwitcherBox>
        <ThemeSwitcher />
      </ThemeSwitcherBox>
    </Container>
  );
}
