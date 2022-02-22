import axios from 'axios';
import React, {useState} from 'react';
import styled from 'styled-components';

const MemoModal = ({setChangeModal}) => {
  const [inputText, setInputText] = useState('');

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSaveMemo = async () => {
    await axios.post('http://3.37.36.163:8080/api/memo', {
      userId: 1,
      JobCompareBoxId: 1,
      Content: inputText,
    });
    setChangeModal(false);
  };

  return (
    <MemoContainer>
      <Title>메모</Title>
      <SubTitle>
        비교한 내용 중 기억하고 싶은 것을 마음껏 작성해주세요.
      </SubTitle>
      <TextArea
        placeholder="비교 항목들을 메모해보세요."
        onChange={handleInputText}
      />
      <ButtonContainer>
        <CancelButton onClick={() => setChangeModal(false)}>취소</CancelButton>
        <SaveButton onClick={handleSaveMemo}>저장</SaveButton>
      </ButtonContainer>
      <Close
        src="./scrap/closeButton.png"
        alt="close"
        onClick={() => setChangeModal(false)}
      />
    </MemoContainer>
  );
};

const MemoContainer = styled.div`
  width: 560px;
  height: 474px;
  background: #ffffff;
  box-shadow: 0px 15px 30px 8px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  padding: 38px 40px;
  position: relative;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -1.5px;
  color: #373f57;
  margin-bottom: 8px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #5c667b;
  margin-bottom: 24px;
`;

const TextArea = styled.textarea`
  width: 480px;
  height: 252px;
  padding: 18px 16px;
  border: 1px solid #d7dce5;
  resize: none;
  margin-bottom: 24px;

  &::placeholder {
    color: #96a0b5;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
`;

const CancelButton = styled(Button)`
  border: 1px solid #d7dce5;
  color: #6b768b;
  margin-right: 8px;
`;

const SaveButton = styled(Button)`
  background-color: #4876ef;
  color: white;
`;

const Close = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  position: absolute;
  top: 20px;
  right: 18px;
  cursor: pointer;
`;

export default MemoModal;
