import styled from 'styled-components';
export const CalendarStyledBtn = styled.button`
  padding: 10px;
  height: 48px;
  background: transparent;

  border: none;

  transition: fill linear 200ms;
  fill: ${p => p.theme.colorTextPrimary};
  &:hover,
  &:focus {


    cursor: pointer;
  }
`;

export const Cross = styled.svg`
  stroke: ${p => p.theme.colorTextPrimary};
  transition: stroke linear 200ms;
  &:hover,
  &:focus {
    stroke: #fc842d;

    cursor: pointer;
  }
`;
