import styled from 'styled-components';
import CompareHeader from './CompareHeader';
import CompareItem from './CompareItem';
import EmptyItem from './EmptyItem';

const CompareBox = ({setChangeModal}) => {
  return (
    <Box>
      <CompareHeader />
      <CompareItem />
      <CompareItem />
      <EmptyItem setChangeModal={setChangeModal} />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
`;

export default CompareBox;
