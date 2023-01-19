import styled from 'styled-components';
export const CalendarStyledBtn = styled.button`
  padding: 10px;
  height: 48px;
  background: transparent;
  /* background: ${p => p.theme.colorTextPrimary}; */
  border: none;

  transition: fill linear 200ms;
  fill: ${p => p.theme.colorTextPrimary};
  &:hover,
  &:focus {
    /* fill: ${p => p.theme.modalBorderColor}; */
    /* fill: ${p => p.theme.colorTextPrimary}; */

    cursor: pointer;
  }
`;

export const Cross = styled.svg`
  /* stroke: #212121; */
  stroke: ${p => p.theme.colorTextPrimary};
  transition: stroke linear 200ms;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.modalBorderColor};

    cursor: pointer;
  }
`;
