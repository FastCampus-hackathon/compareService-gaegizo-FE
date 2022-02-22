import React from 'react';
import styled from 'styled-components';

const MapModal = ({setChangeModal}) => {
  return (
    <MemoContainer>
      <Title>지도</Title>
      <Company>(주)개기조 컴퍼니</Company>
      <Text>서울시 영등포구 국회대로 29길 노벨빌딩 301호</Text>
      <Image src="./comparepageIcons/map.png" alt="map" />
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
  margin-bottom: 24px;
`;

const Company = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #373f57;
  margin-bottom: 9px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #5c667b;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 480px;
  height: 285px;
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

export default MapModal;
