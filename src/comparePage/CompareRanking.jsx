import React from 'react';
import styled from 'styled-components';

const CompareRanking = () => {
  return (
    <RankingContainer>
      <RankingBox first>복리후생 1위</RankingBox>
      <RankingBox>직주근접 3위</RankingBox>
      <RankingBox>연봉 2위</RankingBox>
    </RankingContainer>
  );
};

const RankingContainer = styled.div`
  display: flex;
`;

const RankingBox = styled.div`
  height: 24px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  padding: 2px 11px;
  color: #6b768b;
  background-color: #f4f6fa;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  ${(props) => props.first && 'background-color: #EFF5FF; color: #4876EF'}
`;
export default CompareRanking;
