import React from 'react';
import styled from 'styled-components';

const SaveCompares = ({setSaveCompareModal}) => {
  return (
    <Box>
      <Title>비교함 저장하기</Title>
      <Input placeholder="나만의 비교함 이름을 정해주세요. ex) 신입 초봉 2800주는 기업, 관심기업" />
      <BtnBox>
        <Btn>취소</Btn>
        <Btn primary>비교하기</Btn>
      </BtnBox>
      <Close
        src="./scrap/closeButton.png"
        alt="close"
        onClick={() => setSaveCompareModal(false)}
      />
    </Box>
  );
};

const Box = styled.div`
  width: 560px;
  height: 266px;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 15px 30px 8px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  padding: 38px 40px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -1.5px;
  color: #373f57;
  margin-bottom: 28px;
`;

const Input = styled.input`
  width: 480px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #d7dce5;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -1px;
  padding-left: 16px;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  bottom: 0;
  background: ${({primary}) => (primary ? '#4876ef' : '#fff')};
  border: ${({primary}) => (primary ? 'none' : '1px solid #AFBAC8')};
  color: ${({primary}) => (primary ? '#fff' : '#5C667B')};
  font-size: 16px;
  line-height: 2.4;
  text-align: center;
  border-radius: 4px;
  letter-spacing: -1px;
  width: 120px;
  height: 40px;
`;

const BtnBox = styled.div`
  width: calc(100% - 80px);
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 38px;
  gap: 8px;
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

export default SaveCompares;
