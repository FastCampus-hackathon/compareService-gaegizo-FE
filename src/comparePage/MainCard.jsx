import styled from 'styled-components';

const MainCard = ({setForView, companyName, deadline}) => {
  return (
    <AnnounceCard>
      <HitBox>
        <Star src="./comparepageIcons/star.png" alt="star" />
        24
        <Eye src="./comparepageIcons/eye.png" alt="eye" />
        723
      </HitBox>
      <Title>{companyName}</Title>
      <SubTitle>
        이 세상에 능력 있는 디자이너 및 개발자들 다 우리 회사로 오세요
      </SubTitle>
      <ButtonBox>
        <Button>상세공고보기</Button>
        <Button primary>지원하기</Button>
      </ButtonBox>
      <EndDate>지원마감 22/03/08 23:59</EndDate>
      <img
        id="close"
        src="./comparepageIcons/close.png"
        alt="close"
        onClick={() => setForView(true)}
      />
    </AnnounceCard>
  );
};

const AnnounceCard = styled.div`
  height: 236px;
  background: #eff5ff;
  border-radius: 16px;
  padding: 24px;
  position: relative;
  &:hover {
    border: 1px solid #8491a7;
    background: #fff;
    box-shadow: 2px 8px 12px rgba(92, 102, 123, 0.12);
  }
  & > #close {
    display: none;
  }
  &:hover > #close {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
  }
`;

const HitBox = styled.div`
  height: 26px 24px;
  color: #8491a7;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;

const Star = styled.img`
  height: 24px;
  width: 24px;
  padding-top: 2px;
  margin-right: 2px;
`;

const Eye = styled.img`
  height: 24px;
  width: 24px;
  padding-top: 2px;
  margin-right: 2px;
  margin-left: 14px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #373f57;
  margin-top: 22px;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #373f57;
  margin-top: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;

const Button = styled.button`
  width: 138px;
  height: 40px;
  color: ${({primary}) => (primary ? '#FFF' : '#4876ef')};
  background: ${({primary}) => (primary ? '#4876ef' : '#FFF')};
  border: 1px solid #4876ef;
  border-radius: 8px;
`;

const EndDate = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #5c667b;
  margin-top: 4px;
  text-align: end;
`;

export default MainCard;
