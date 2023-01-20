import { breakpoints } from 'helpers/breakpoints';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BurgerOverlay = styled.div`
  position: absolute;
  z-index: 1000;
  min-width: 320px;
  width: 100%;
  min-height: 140vh;
  background: ${p => (p.theme.gradient ? '#264061' : '#424242')};
  text-align: center;
  overflow: hidden;

  position: relative;
  ::before {
    content: '';
    left: 0px;
    top: 0px;
    position: absolute;
    height: ${p => (p.theme.gradient ? '0px' : '2px')};
    min-width: 320px;
    width: 100%;
    background-color: #e0e0e0;

    @media ${breakpoints.desktop} {
      display: none;
    }
  }
`;

export const BurgerList = styled.ul``;

export const BurgerItem = styled.li``;
export const BurgerLink = styled(NavLink)`
  display: inline-block;
  padding: 20px;
  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;

  :not(.active) {
    color: #9b9faa;
  }
`;
