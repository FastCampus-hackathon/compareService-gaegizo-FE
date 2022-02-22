import React from 'react';
import styled from 'styled-components';

const ScrapBottom = () => {
  return (
    <BottomContainer>
      <Image src="./scrap/folder.png" alt="folder" folder />
      <FolderStatus>분류없음 (3)</FolderStatus>
      <Image src="./scrap/downArrow.png" alt="arrow" arrow />
      <Image src="./scrap/board.png" alt="board" board />
      <NoticeContainer>
        <Text>22/02/21 스크랩</Text>
        <Text>
          공고에 관련된 중요한 내용을 메모해보세요. ex) 입사지원 시 포트폴리오
          첨부하기
        </Text>
      </NoticeContainer>
    </BottomContainer>
  );
};

const BottomContainer = styled.div`
  height: 40px;
  padding: 10px 0 11px 12px;
  margin-left: 32px;
  background-color: #f8fafc;
  display: flex;
`;

const Image = styled.img`
  margin-right: 12px;

  ${(props) => props.folder && 'width: 16px; height: 15px;'}
  ${(props) => props.arrow && 'width: 10px; height: 8px; margin: 5px 29px 0 0;'}
  ${(props) => props.board && 'width: 14px; height: 16px; margin-right: 13px;'}
`;

const FolderStatus = styled.p`
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  margin-right: 26px;
  color: #373f57;
`;

const NoticeContainer = styled.div`
  display: flex;
  height: 20px;
  line-height: 20px;
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #8491a7;

  &:first-child {
    margin-right: 8px;
  }
`;

export default ScrapBottom;
