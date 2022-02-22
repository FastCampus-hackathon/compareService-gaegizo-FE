import React from 'react';
import styled from 'styled-components';
import ScrapBottom from './ScrapBottom';

const ScrapItem = ({list}) => {
  const {companyName, title, career, education, workType, region, deadline} =
    list;
  return (
    <ItemContainer>
      <InfoContainer>
        <CheckBox />
        <Company>{companyName}</Company>
        <CompanyInfo>
          <Title>{title}</Title>
          <TagList>
            <Tag>{career}</Tag>
            <Tag>{education}</Tag>
            <Tag>{workType}</Tag>
            <Tag>{region}</Tag>
          </TagList>
        </CompanyInfo>
        <ButtonContainer>
          <CompareButton>비교함에 추가</CompareButton>
          <ApplyButton>입사지원</ApplyButton>
          <DeadLine>{deadline}</DeadLine>
        </ButtonContainer>
        <DeleteButton>
          <Image src="./scrap/deleteButton.png" alt="delete" />
        </DeleteButton>
      </InfoContainer>
      <ScrapBottom />
    </ItemContainer>
  );
};

const ItemContainer = styled.li`
  height: 205px;
  border-bottom: 1px solid #d7dce5;
  position: relative;
`;

const InfoContainer = styled.div`
  padding: 32px 12px 34px 5px;
  display: flex;
`;

const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 27px;
  border: 1px solid #96a0b5;
`;

const Company = styled.p`
  height: 22px;
  line-height: 22px;
  font-size: 15px;
  font-weight: 400;
  margin-right: 91px;
`;

const CompanyInfo = styled.div`
  margin-right: 230px;
`;

const Title = styled.p`
  width: 523px;
  height: 28px;
  line-height: 28px;
  font-size: 20px;
  font-weight: 700;
  color: #373f57;
  margin-bottom: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TagList = styled.div`
  display: flex;
`;

const Tag = styled.div`
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  margin-right: 11px;
  color: #8491a7;

  &:last-child {
    margin-right: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-right: 12px;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  border-radius: 4px;
`;

const CompareButton = styled(Button)`
  border: 1px solid #8491a7;
  color: #5c667b;
  margin-right: 7px;
`;

const ApplyButton = styled(Button)`
  border: 1px solid #4876ef;
  color: #4876ef;
`;

const DeadLine = styled.p`
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  color: #373f57;
  position: absolute;
  top: 78px;
  right: 70px;
`;

const DeleteButton = styled.button`
  height: 40px;
`;

const Image = styled.img`
  width: 16px;
  height: 16px;
`;

export default ScrapItem;
