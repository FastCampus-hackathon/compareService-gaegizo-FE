import React from 'react';
import styled from 'styled-components';

const ScrapFilter = () => {
  return (
    <FilterContainer>
      <LeftFilter>
        <Filter first>
          전체(3)
          <Image src="./scrap/downArrow.png" alt="arrow" arrow />
        </Filter>
        <Filter>전체 선택</Filter>
        <Filter>폴더 이동</Filter>
        <Filter>폴더 추가</Filter>
      </LeftFilter>
      <RightFilter>
        <Filter>
          <Image src="./scrap/checkButton.png" alt="check" />
          입사지원만
          <Image src="./scrap/checkButton.png" alt="check" check />
          지원한 공고 제외
          <Image src="./scrap/checkButton.png" alt="check" check />
          메모 있는 공고만
        </Filter>
        <Filter scrap>
          스크랩일순 <Image src="./scrap/downArrow.png" alt="arrow" arrow />
        </Filter>
        <Filter count>
          20
          <Image src="./scrap/downArrow.png" alt="arrow" arrow />
        </Filter>
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
  padding: 9px 15px 11px 13px;
  border: 1px solid #d7dce5;
  border-radius: 4px;
  color: #5c667b;
  margin-right: 8px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  ${(props) => props.first && 'width: 153px;'}
  ${(props) => props.scrap && 'width: 115px;'}
  ${(props) => props.count && 'width: 80px;'}
`;

const Image = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 6.5px;

  ${(props) =>
    props.arrow &&
    'width: 10px; height: 8px; position: absolute; top: 16px; right: 10px;'}
  ${(props) => props.search && 'margin-left: 41px;'}
  ${(props) => props.check && 'margin-left: 13px;'}
`;

export default ScrapFilter;
