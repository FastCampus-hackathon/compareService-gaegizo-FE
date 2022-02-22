import {useState} from 'react';
import styled from 'styled-components';
import MemoModal from '../ModalComponent/MemoModal';
import ChangeModal from '../ModalComponent/ChangeModal';
import ModalContainer from '../ModalComponent/ModalContainer';
import SaveCompares from '../ModalComponent/SaveCompares';
import CompareBox from './CompareBox';

const ComparePage = ({list}) => {
  const [changeModal, setChangeModal] = useState(false);
  const [memoModal, setMemoModal] = useState(false);
  const [saveCompareModal, setSaveCompareModal] = useState(false);

  // 비교한 데이터 가져옴
  console.log(list);

  return (
    <Container>
      <Title>공고 비교하기</Title>
      <ToolBar>
        <MemoBar onClick={() => setMemoModal(true)}>
          <Img src="./comparepageicons/memotip.png" alt="memo icon" />
          스크랩한 공고를 한눈에 비교하고, 중요한 관련 정보들을 메모해보세요.
          ex) 개기조 컴퍼니는 빨간버스로 한번에 감.
        </MemoBar>
        <CompareBtn onClick={() => setSaveCompareModal(true)}>
          비교함 저장하기
        </CompareBtn>
      </ToolBar>
      <CompareBox setChangeModal={setChangeModal} />
      {changeModal && (
        <ModalContainer>
          <ChangeModal setChangeModal={setChangeModal} />
        </ModalContainer>
      )}
      {memoModal && (
        <ModalContainer>
          <MemoModal setChangeModal={setMemoModal} />
        </ModalContainer>
      )}
      {saveCompareModal && (
        <ModalContainer>
          <SaveCompares setSaveCompareModal={setSaveCompareModal} />
        </ModalContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 1248px;
  margin: 0 auto;
  padding-top: 85px;
`;

const Text = styled.p`
  font-weight: 700;
  color: #373f57;
`;

const Title = styled(Text)`
  font-size: 36px;
  margin-bottom: 60px;
`;

const ToolBar = styled.div`
  display: flex;
`;

const MemoBar = styled.div`
  width: 988px;
  height: 48px;
  padding: 0 14px;
  background: #f8fafc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 18px;
  height: 20px;
  margin-right: 12px;
`;

const CompareBtn = styled.div`
  width: 244px;
  height: 48px;
  background: #4876ef;
  border-radius: 8px;
  margin-left: 16px;
  font-weight: 700;
  font-size: 20px;
  line-height: 2.5;
  color: #ffffff;
  text-align: center;
`;

export default ComparePage;
