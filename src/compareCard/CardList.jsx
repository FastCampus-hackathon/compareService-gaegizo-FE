import {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ComparePage from '../ComparePage/ComparePage';
import CardItem from './CardItem';
import DefaultCard from './DefaultCard';

const CardList = ({list}) => {
  const [current, setCurrent] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [empty, setEmpty] = useState(['', '', '']);

  const handleCompare = async () => {
    const {data} = await axios.get(
      'http://3.37.36.163:8080/api/compare?jobNumber1=42320380&jobNumber2=42377191&jobNumber3=42349073',
    );
    setCompareList(data);
    setCurrent((current) => !current);
  };

  return (
    <>
      {current && <ComparePage list={compareList} />}
      <ListContainer>
        <Title>스크랩/관심기업</Title>
        <SubTitle>김바쁨님, 스크랩한 공고들을 한눈에 비교해보세요!</SubTitle>
        <CardLists>
          {0 < list.length
            ? list.map((item, index) => (
                <CardItem cardList={item} key={index} />
              ))
            : empty.map((item, index) => <DefaultCard key={index} />)}
          <CompareContainer>
            <CompareButton onClick={handleCompare}>공고 비교하기</CompareButton>
            <ResetButton>비교함 초기화</ResetButton>
          </CompareContainer>
        </CardLists>
      </ListContainer>
    </>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 90px;
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

const CompareContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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

export default CardList;
