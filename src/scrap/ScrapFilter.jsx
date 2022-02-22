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
        <Filter>
          <Image src="./scrap/checkButton.png" />
          입사지원만
          <Image src="./scrap/checkButton.png" />
          지원한 공고 제외
          <Image src="./scrap/checkButton.png" />
          메모 있는 공고만
        </Filter>
        <Filter>스크랩일순</Filter>
        <Filter>20</Filter>
        <Filter>
          키워드 입력
          <Image src="./scrap/readingGlasses.png" search />
        </Filter>
      </RightFilter>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  height: 40px;
  margin-bottom: 13px;
  display: flex;
  justify-content: space-between;
`;

const LeftFilter = styled.ul`
  display: flex;
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
  width: 16px;
  height: 16px;
  margin-right: 6.5px;

  ${(props) => props.search && 'margin-left: 41px;'}
`;

export default ScrapFilter;
