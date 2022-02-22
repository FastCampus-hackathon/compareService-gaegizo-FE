import React from 'react';
import styled from 'styled-components';

const ScrapFilter = () => {
  return (
    <FilterContainer>
      <LeftFilter>
        <Filter first>전체(3)</Filter>
        <Filter>전체 선택</Filter>
        <Filter>폴더 이동</Filter>
        <Filter>폴더 추가</Filter>
      </LeftFilter>
      <RightFilter>
        <Filter first>전체(3)</Filter>
        <Filter>전체 선택</Filter>
        <Filter>폴더 이동</Filter>
        <Filter>폴더 추가</Filter>
      </RightFilter>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  border: 1px solid red;
  height: 40px;
  margin-bottom: 13px;
  display: flex;
`;

const LeftFilter = styled.ul`
  display: flex;
  margin-right: 51px;
`;

const RightFilter = styled.ul`
  display: flex;
`;

const Filter = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 9px 16px 11px 13px;
  border: 1px solid #d7dce5;
  border-radius: 4px;
  color: #5c667b;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  ${(props) => props.first && 'width: 153px;'}
`;

export default ScrapFilter;
