import styled from 'styled-components';

const CompareItem = () => {
  return (
    <Col>
      <Row h={224} noborder>
        공고비교
      </Row>
      <Row h={68}>경력</Row>
      <Row h={68}>직무</Row>
      <Row h={204}>연봉</Row>
      <Row h={68}>업종</Row>
      <Row h={96}>근무지역</Row>
      <Row h={68}>근무형태</Row>
      <Row h={150}>복리후생</Row>
      <Row h={70}>접수기간</Row>
      <Row h={68}>지원방법</Row>
      <Row h={102}>우대사항</Row>
      <Row h={236}>지원자 통계</Row>
    </Col>
  );
};

const Col = styled.div`
  width: 348px;
  margin-top: 24px;
  margin-bottom: 300px;
`;

const Row = styled.div`
  height: ${({h}) => `${h}px`};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 24px 8px 0;
  color: #373f57;
  border-bottom: ${({noborder}) => (noborder ? '' : '1px solid #D7DCE5')};
`;

export default CompareItem;
