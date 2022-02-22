import axios from 'axios';
import styled from 'styled-components';

const StorageTable = () => {
  const handleShowMemo = async () => {
    // 메모 아이디가 주소 맨 끝에 들어감
    const data = await axios.get('http://3.37.36.163:8080/api/memo/1');
    console.log(data);
  };

  return (
    <FlexBox>
      <StorageCard>
        <Title>이름없는 공고함!</Title>
        <MemoBar onClick={handleShowMemo}>
          <Img src="./comparepageicons/memotip.png" alt="memo icon" />
          스크랩한 공고를 한눈에 비교하고, 중요한 관련 정보들을 메모해보세요.
          ex) 개기조 컴퍼니는 빨간버스로 한번에 감.
        </MemoBar>
        <img id="close" src="./comparepageIcons/close.png" alt="close" />
      </StorageCard>
      <StorageCard>
        <Title>이름없는 공고함!</Title>
        <MemoBar>
          <Img src="./comparepageicons/memotip.png" alt="memo icon" />
          스크랩한 공고를 한눈에 비교하고, 중요한 관련 정보들을 메모해보세요.
          ex) 개기조 컴퍼니는 빨간버스로 한번에 감.
        </MemoBar>
        <img id="close" src="./comparepageIcons/close.png" alt="close" />
      </StorageCard>
      <DefaultCard src="./CompareStorage/default.png" alt="no data" />
      <DefaultCard src="./CompareStorage/default.png" alt="no data" />
      <DefaultCard src="./CompareStorage/default.png" alt="no data" />
      <DefaultCard src="./CompareStorage/default.png" alt="no data" />
      <DefaultCard src="./CompareStorage/default.png" alt="no data" />
      <DefaultCard src="./CompareStorage/default.png" alt="no data" />
      <DefaultCard src="./CompareStorage/default.png" alt="no data" />
      <DefaultCard src="./CompareStorage/default.png" alt="no data" />
      <DefaultCard src="./CompareStorage/default.png" alt="no data" />
      <AddCard>
        <AddTitle>
          나만의 공고 비교함을
          <br /> 만들어보세요
        </AddTitle>
        <AddSub>공고 비교하러 가기</AddSub>
      </AddCard>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 16px;
`;

const StorageCard = styled.div`
  width: 300px;
  height: 152px;
  background: #eff5ff;
  border-radius: 16px;
  padding: 28px 24px;
  position: relative;
  & > #close {
    display: none;
  }
  &:hover > #close {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 18px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -1px;
  color: #373f57;
  cursor: pointer;
`;

const DefaultCard = styled.img`
  width: 300px;
  height: 152px;
  border-radius: 16px;
`;

const AddCard = styled.div`
  width: 300px;
  height: 152px;
  background: #f4f6fa;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AddTitle = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -1px;
  color: #373f57;
  margin-bottom: 8px;
`;

const AddSub = styled.div`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -1px;
  text-decoration-line: underline;
  color: #5c667b;
`;

const MemoBar = styled.div`
  width: 252px;
  height: 32px;
  padding: 0 8px;
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #8491a7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  bottom: 28px;
`;

const Img = styled.img`
  width: 18px;
  height: 20px;
  margin-right: 10px;
`;

export default StorageTable;
