import {useState} from 'react';
import styled from 'styled-components';

const CardItem = ({cardList}) => {
  const {id, company, title, tag} = cardList;
  const [isShow, setIsShow] = useState(false);

  const handleShowButton = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <CardItemContainer
      onMouseEnter={handleShowButton}
      onMouseLeave={handleShowButton}>
      <Info>{company}</Info>
      <Notice>{title}</Notice>
      <TagList>
        {tag.map((tags, index) => (
          <Tag key={index}>{`#${tags}`}</Tag>
        ))}
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
  overflow: hidden;
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

export default CardItem;
