import React from 'react';
import styled from 'styled-components';

const DefaultCard = () => {
  return (
    <DefaultCardContainer>
      <Notice>
        <Image src="./scrap/plus.png" alt="plus" plus />
        <Text>비교하고 싶은 공고를 추가해 보세요</Text>
      </Notice>
      <TagList>
        <Tag>더 많은 공고를 비교하고 싶다면?</Tag>
      </TagList>
      <BottomContainer>
        <RecommendButton>추천공고보기</RecommendButton>
      </BottomContainer>
    </DefaultCardContainer>
  );
};

const DefaultCardContainer = styled.div`
  width: 332px;
  border-radius: 16px;
  padding: 55px 24px 20px;
  margin-right: 16px;
  position: relative;
  cursor: pointer;
  transition: 200ms ease-in;
  background-color: #f4f6fa;

  &:hover {
    box-shadow: 0px 5px 8px rgba(92, 102, 123, 0.12);
  }
`;

const Notice = styled.p`
  width: 284px;
  height: 26px;
  line-height: 26px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #373f57;
  display: flex;
`;

const TagList = styled.ul`
  display: flex;
  margin-bottom: 36px;
`;

const Tag = styled.li`
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  margin-right: 12px;
  color: #8491a7;

  &:last-child {
    margin-right: 0;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;

  ${(props) => props.plus && 'margin-right: 4px;'}
`;

const Text = styled.span`
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -1px;
`;

const RecommendButton = styled.button`
  height: 26px;
  font-size: 12px;
  font-weight: 400;
  padding: 3px 11px;
  margin-left: 8px;
  border-radius: 4px;
  border: 1px solid #8491a7;
  color: #5c667b;
`;

export default DefaultCard;
