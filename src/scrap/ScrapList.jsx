import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ScrapItem from './ScrapItem';

const ScrapList = () => {
  const [scrapList, setScrapList] = useState([]);

  const handleGetData = async () => {
    const {data} = await axios.get('./data/scrapList.json');
    setScrapList(data.data);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <ListContainer>
      {scrapList &&
        scrapList.map((list) => <ScrapItem key={list.jobNumber} list={list} />)}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  border-top: 1px solid #d7dce5;
`;

export default ScrapList;
