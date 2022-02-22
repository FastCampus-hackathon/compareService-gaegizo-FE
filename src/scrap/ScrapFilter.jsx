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
        <Filter>입사지원만</Filter>

        <Filter>스크랩일순</Filter>
        <Filter>20</Filter>
        <Filter>
          키워드 입력
          <Image src="./scrap/readingGlasses.png" />
        </Filter>
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

const Image = styled.img`
  border: 1px solid red;
  width: 16px;
  height: 16px;
  margin-left: 41px;
`;

export default ScrapFilter;
