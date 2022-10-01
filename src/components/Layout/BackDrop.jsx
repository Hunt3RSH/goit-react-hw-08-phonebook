import { BackDropStyled } from './Layout.styled';
import { Blocks } from 'react-loader-spinner';
export const BackDropLoader = () => {
  return (
    <BackDropStyled>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="loaderStyle"
      />
    </BackDropStyled>
  );
};
