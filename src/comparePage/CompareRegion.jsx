import React, {useState} from 'react';
import styled from 'styled-components';
import ModalContainer from '../ModalComponent/ModalContainer';
import MapModal from '../ModalComponent/MapModal';

const CompareRegion = () => {
  const [changeModal, setChangeModal] = useState(false);

  return (
    <>
      <RegionContainer>
        <Region>서울시 영등포구 국회대로 29</Region>
        <ShowMap onClick={() => setChangeModal(true)}>지도보기</ShowMap>
      </RegionContainer>
      <Distance>지하철 2호선 영등포구청에서 800m</Distance>
      {changeModal && (
        <ModalContainer>
          <MapModal setChangeModal={setChangeModal} />
        </ModalContainer>
      )}
    </>
  );
};

const RegionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Region = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #373f57;
`;

const ShowMap = styled.button`
  width: 96px;
  height: 26px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #afbac8;
  color: #5c667b;
`;

const Distance = styled.p``;

export default CompareRegion;
