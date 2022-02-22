import React from 'react';
import styled from 'styled-components';

const WELFARE = '야근없음, 도서비지원, 식대지원';

const CompareWelfare = () => {
  const welfare = WELFARE.split(', ');

  return (
    <>
      <InfoContainer>
        <Count>총 {welfare.length}개</Count>
        <ShowInfo>기업정보보기</ShowInfo>
      </InfoContainer>
      <Info>
        {welfare.map((item, index) => (
          <WelfareBox key={index}>{`#${item}`}</WelfareBox>
        ))}
      </Info>
    </>
  );
};

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
`;

const Count = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #373f57;
`;

const ShowInfo = styled.button`
  height: 26px;
  padding: 3px 13px;
  border: 1px solid #afbac8;
  border-radius: 4px;
  color: #5c667b;
`;

const Info = styled.div`
  display: flex;
`;

const WelfareBox = styled.div`
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  padding: 2px 11px;
  background-color: #eff5ff;
  color: #4876ef;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export default CompareWelfare;
