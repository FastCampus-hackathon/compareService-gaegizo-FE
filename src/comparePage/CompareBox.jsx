import styled from 'styled-components';
import CompareHeader from './CompareHeader';
import CompareItem from './CompareItem';
import EmptyItem from './EmptyItem';

const CompareBox = () => {
  return (
    <Box>
      <CompareHeader />
      <CompareItem />
      <CompareItem />
      <EmptyItem />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
`;

export default CompareBox;
