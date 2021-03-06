import styled from 'styled-components';

const EmptyItem = ({setChangeModal}) => {
  return (
    <Col>
      <Row h={246} noborder nopadding>
        <EmptyCard onClick={() => setChangeModal(true)}>
          <Title>
            <img
              src="./comparepageIcons/plus.png"
              alt="plus"
              width={24}
              height={24}
            />
            다른 공고 추가하기
          </Title>
          <SubTitle>스크랩한 관심공고들을 한눈에 비교해보세요.</SubTitle>
        </EmptyCard>
      </Row>
      <Row h={72} />
      <Row h={72} />
      <Row h={208} />
      <Row h={72} />
      <Row h={102} />
      <Row h={72} />
      <Row h={148} />
      <Row h={102} />
      <Row h={72} />
      <Row h={102} />
      <Row h={464} />
      <Row h={72} />
    </Col>
  );
};

const Col = styled.div`
  width: 348px;
  margin-top: 24px;
  margin-bottom: 300px;
`;

const Row = styled.div`
  height: ${({h}) => `${h}px`};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: ${({nopadding}) =>
    nopadding ? '0px 0px 0px 16px' : '24px 0px 0px 20px'};
  color: #373f57;
  border-bottom: ${({noborder}) => (noborder ? '' : '1px solid #D7DCE5')};
`;

const EmptyCard = styled.div`
  height: 236px;
  background: #f4f6fa;
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #373f57;
  display: flex;
  align-items: center;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #373f57;
  letter-spacing: -1px;
  margin-top: 8px;
`;

export default EmptyItem;
