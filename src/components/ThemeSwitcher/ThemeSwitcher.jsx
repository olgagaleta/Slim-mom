import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'redux/darkTheme/slice.darkTheme';
import {
  InputSwitcher,
  LabelSwitcher,
  ThemeCheckbox,
  ThemeDark,
  ThemeLight,
  Switcher,
} from './ThemeSwitcher.styled';
import { selectDarkTheme } from 'redux/darkTheme/selectors.darkTheme';

export default function ThemeSwitcher() {
  const dispatch = useDispatch();
  const isDark = useSelector(selectDarkTheme);

  const switchTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <Switcher>
      <ThemeLight>light</ThemeLight>
      <LabelSwitcher>
        <InputSwitcher
          onChange={switchTheme}
          type="checkbox"
          checked={isDark}
        />
        <ThemeCheckbox></ThemeCheckbox>
      </LabelSwitcher>
      <ThemeDark>dark</ThemeDark>
    </Switcher>
  );
}
