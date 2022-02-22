import axios from 'axios';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import CompareHeader from './CompareHeader';
import CompareItem from './CompareItem';
import EmptyItem from './EmptyItem';

const CompareBox = ({setChangeModal}) => {
  const [list, setList] = useState([0, 0, 0]);
  const [forView, setForView] = useState(false);
  useEffect(() => {
    (async () => {
      const {data} = await axios.get(
        'http://3.37.36.163:8080/api/compare?jobNumber1=42320380&jobNumber2=42377191&jobNumber3=42349073',
      );
      setList(data);
    })();
  }, []);
  console.log(list);
  return (
    <Box>
      <CompareHeader />
      <CompareItem data={list[0]} />
      <CompareItem data={list[1]} />
      {forView ? (
        <EmptyItem setChangeModal={setChangeModal} />
      ) : (
        <CompareItem data={list[2]} setForView={setForView} />
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
`;

export default CompareBox;
