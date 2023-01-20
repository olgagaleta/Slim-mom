// import styled, { keyframes } from 'styled-components';
// import Calendar from 'react-calendar';
// import { breakpoints } from 'helpers/breakpoints';

// const animation = keyframes`
//   50% {
//     color: rgb(252, 132, 45);
//   }
// `;

// export const Overlay = styled.div`
//   position: fixed;
//   min-width: 320px;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(33, 33, 33, 0.12);
//   z-index: 1200;

//   @media ${breakpoints.maxMobile} {
//     top: 120px;
//   }
// `;

// export const DateContainer = styled.div`
//   position: relative;
//   display: flex;
//   gap: 10px;

//     margin-top: 40px;
//     @media ${breakpoints.minTablet} {
//       margin-top: 90px;
//       }
//       @media ${breakpoints.desktop} {
//         margin-top: 220px;
//     }
//   `;

// export const DateString = styled.p`
//   font-family: 'Jost';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 26px;
//   display: flex;
//   align-items: center;

//   @media ${breakpoints.minTablet} {
//     font-size: 34px;
//     line-height: 49px;
//   }

//   color: ${p => p.theme.colorTextPrimary};
//   animation-name: ${p => (p.state === 'pending' ? animation : 'none')};
//   animation-duration: 1000ms;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
// `;

// export const MyCalendar = styled(Calendar)`
//   position: absolute;
//   left: 0;
//   right: 0;
//   transform: translateY(15%);

//   &.react-calendar {
//     background: ${p => p.theme.modalColor};
//     border-radius: 4px;
//     overflow: hidden;
//   }

//   & button:disabled,
//   & button:disabled.react-calendar__navigation__arrow {
//     background: ${p => p.theme.calendarColor};
//   }
// `;


import styled, { keyframes } from 'styled-components';
import Calendar from 'react-calendar';
import { breakpoints } from 'helpers/breakpoints';

const animation = keyframes`
  50% {
    color: rgb(252, 132, 45);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  min-width: 320px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;

  @media ${breakpoints.maxMobile} {
    top: 120px;
  }
`;

export const DateContainer = styled.div`
  position: relative;
  display: flex;
  gap: 10px;

  margin-top: 40px;
  @media ${breakpoints.minTablet} {
    margin-top: 90px;
  }
  @media ${breakpoints.desktop} {
    margin-top: 220px;
  }
`;
export const DateString = styled.p`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;

  @media ${breakpoints.minTablet} {
    font-size: 34px;
    line-height: 49px;
  }

  color: #212121;

  animation-name: ${p => (p.state === 'pending' ? animation : 'none')};
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const MyCalendar = styled(Calendar)`
  position: absolute;
  top: 100px;

  &.react-calendar {
    background: ${p => p.theme.modalColor};
    border-radius: 4px;
    overflow: hidden;
  }

  & button:disabled,
  & button:disabled.react-calendar__navigation__arrow {
    background: ${p => p.theme.calendarColor};
  }

  @media ${breakpoints.minTablet} {
    left: centr;
    top: 230px;
    transform: translateX(-35%);
    
  }

  @media ${breakpoints.desktop} {
  top: 290px;
  transform: translateX(-120%);

  }
`;