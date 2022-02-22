import styled from 'styled-components';
import CompareHeader from './CompareHeader';
import CompareItem from './CompareItem';

const CompareBox = () => {
  return (
    <Box>
      <CompareHeader />
      <CompareItem />
      <CompareItem />
      <CompareItem />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
`;

export default CompareBox;
