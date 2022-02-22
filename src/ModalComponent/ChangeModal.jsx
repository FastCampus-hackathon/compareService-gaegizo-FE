import React from 'react';
import styled from 'styled-components';

const ChangeModal = ({setChangeModal}) => {
  return (
    <Box>
      <Title>다른 공고 추가하기</Title>
      <FlexBox>
        <InputSelect type="select">
          <option>전체(30)</option>
        </InputSelect>
        <Input placeholder="키워드 입력" />
      </FlexBox>
      <Close
        src="./scrap/closeButton.png"
        alt="close"
        onClick={() => setChangeModal(false)}
      />
    </Box>
  );
};

const Box = styled.div`
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
  margin-bottom: 24px;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 12px;
`;

const InputSelect = styled.select`
  width: 160px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #d7dce5;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 8px;
`;

const Input = styled.input`
  width: 308px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #d7dce5;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 12px;
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

export default ChangeModal;
