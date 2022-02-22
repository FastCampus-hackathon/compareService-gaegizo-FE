import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ScrapItem from './ScrapItem';

const ScrapList = ({onAddCompare}) => {
  const [scrapList, setScrapList] = useState([]);

  const handleGetData = async () => {
    // const data = await axios.get('api/interestJob/list');
    // console.log(data);
    const {data} = await axios.get('./data/scrapList.json');
    setScrapList(data.data);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <ListContainer>
      {scrapList &&
        scrapList.map((list) => (
          <ScrapItem
            key={list.jobNumber}
            list={list}
            onAddCompare={onAddCompare}
          />
        ))}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  border-top: 1px solid #d7dce5;
`;

export default ScrapList;
