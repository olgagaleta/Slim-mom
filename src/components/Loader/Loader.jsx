// import {
//   // Arrow,
//   Container,
//   // Spinner, SpinnerContainer
// } from './Loader.styled';
// // import Scales from 'helpers/images/loader.png';
// // import SpinnerBase from 'helpers/images/loader-mini.png';
// // import { Hearts } from 'react-loader-spinner';

// export default function Loader() {
//   return (
//     <Container>
//       {/* <SpinnerContainer>
//         <img src={Scales} alt="scales" />
//       </SpinnerContainer>
//       <Spinner>
//         <Arrow src={SpinnerBase} alt="spinner" />
//       </Spinner> */}
//       {/* <Hearts
//         height="80"
//         width="80"
//         color="#fc842d"
//         ariaLabel="hearts-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//         visible={true}
//         // className="true"
//         // className="true" or className={value.toString()}.
//       /> */}
//     </Container>
//   );
// }

import { Triangle } from 'react-loader-spinner';
import { Container, SpinnerContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <SpinnerContainer>
      <Triangle
        height="80"
        width="80"
        color="green"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
          />
          </SpinnerContainer>
      </Container>
  );
};
export default Loader;
