import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ChangeModal = ({setChangeModal}) => {
  const handleCompare = async () => {
    const data = await axios.get(
      `http://3.37.36.163:8080/api/announcement/${jobNumber}`,
    );
    console.log(data);
  };

  return (
    <Box>
      <Title>다른 공고 추가하기</Title>
      <FlexBox>
        <InputSelect type="select">
          <option>전체(30)</option>
        </InputSelect>
        <Input placeholder="키워드 입력" />
        <Search src="./comparepageIcons/search.png" alt="search" />
      </FlexBox>
      <ListBox>
        <List primary>개기조 컴퍼니</List>
        <List primary>(주)매일매일확인</List>
        <List>신한</List>
        <List>안잡아먹는 중소기업</List>
        <List>젤리젤리</List>
        <List>취업 잘 되는 회사</List>
        <List>그냥 회사</List>
      </ListBox>
      <BtnBox>
        <Btn>취소</Btn>
        <Btn primary onClick={handleCompare}>
          비교하기
        </Btn>
      </BtnBox>
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
  position: relative;
`;

const Search = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 8px;
  right: 12px;
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
const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`;
const List = styled.div`
  height: 36px;
  padding: 0 12px;
  background: ${({primary}) => (primary ? '#4876ef' : '#fff')};
  border-radius: 12px;
  border: ${({primary}) => (primary ? 'none' : '1px solid #AFBAC8')};
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -1px;
  color: ${({primary}) => (primary ? '#fff' : '#5C667B')};
  display: flex;
  justify-content: center;
  align-items: center;
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

export default ChangeModal;
