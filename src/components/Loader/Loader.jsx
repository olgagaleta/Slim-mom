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
