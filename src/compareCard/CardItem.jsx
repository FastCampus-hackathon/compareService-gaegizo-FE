import {useState} from 'react';
import styled from 'styled-components';

const CardItem = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShowButton = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <>
      <CardItemContainer
        onMouseEnter={handleShowButton}
        onMouseLeave={handleShowButton}>
        <Info>(주)개기조 컴퍼니</Info>
        <Notice>공고명 한줄만 공고제목 한줄만 공고에요</Notice>
        <TagList>
          <Tag>#직무명</Tag>
          <Tag>#지역명</Tag>
        </TagList>
        <BottomContainer>
          <EndDay>~03/08</EndDay>
          <ApplyButton>입사지원</ApplyButton>
        </BottomContainer>
        {isShow && (
          <CloseButton>
            <Image src="./scrap/closeButton.png" alt="close" />
          </CloseButton>
        )}
      </CardItemContainer>
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
      <CompareContainer>
        <CompareButton>공고 비교하기</CompareButton>
        <ResetButton>비교함 초기화</ResetButton>
      </CompareContainer>
    </>
  );
};

const Card = styled.li`
  width: 332px;
  border-radius: 16px;
  padding: 0 24px 20px;
  margin-right: 16px;
  position: relative;
  cursor: pointer;
  transition: 200ms ease-in;

  &:hover {
    box-shadow: 0px 5px 8px rgba(92, 102, 123, 0.12);
  }
`;

const CardItemContainer = styled(Card)`
  padding-top: 28px;
  background-color: #f0f5ff;
`;

const DefaultCardContainer = styled(Card)`
  padding-top: 55px;
  background-color: #f4f6fa;
`;

const Info = styled.p`
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 6px;
  color: #373f57;
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

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;

  ${(props) => props.plus && 'margin-right: 4px;'}
`;

const Text = styled.span`
  height: 24px;
`;

const EndDay = styled.p`
  height: 20px;
  line-height: 28px;
  font-size: 12px;
  font-weight: 400;
  color: #5c667b;
`;

const Button = styled.button`
  height: 26px;
  font-size: 12px;
  font-weight: 400;
  padding: 3px 11px;
  margin-left: 8px;
  border-radius: 4px;
`;

const ApplyButton = styled(Button)`
  border: 1px solid #4876ef;
  color: #4876ef;
`;

const RecommendButton = styled(Button)`
  border: 1px solid #8491a7;
  color: #5c667b;
`;

const CompareContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompareButton = styled.button`
  width: 204px;
  height: 130px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 12px;
  margin-bottom: 12px;
  background-color: #3157dd;
  color: white;
`;

const ResetButton = styled.button`
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  border: 1px solid #8491a7;
  color: #5c667b;
`;
export default CardItem;
