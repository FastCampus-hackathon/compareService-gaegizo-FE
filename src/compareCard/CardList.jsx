import styled from 'styled-components';
import CardItem from './CardItem';

const CardList = () => {
  return (
    <ListContainer>
      <Title>스크랩/관심기업</Title>
      <SubTitle>김바쁨님, 스크랩한 공고들을 한눈에 비교해보세요!</SubTitle>
      <CardLists>
        <CardItem />
      </CardLists>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

const Text = styled.p`
  font-weight: 700;
  color: #373f57;
`;

const Title = styled(Text)`
  font-size: 36px;
  margin-bottom: 60px;
`;

const SubTitle = styled(Text)`
  font-size: 20px;
  margin-bottom: 24px;
`;

const CardLists = styled.ul`
  height: 190px;
  display: flex;
`;

export default CardList;
