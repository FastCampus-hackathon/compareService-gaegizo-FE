import styled from 'styled-components';

const CompareHeader = () => {
  return (
    <Col>
      <Row h={246} noborder>
        공고비교
      </Row>
      <Row h={72}>경력</Row>
      <Row h={72}>직무</Row>
      <Row h={208}>연봉</Row>
      <Row h={72}>업종</Row>
      <Row h={102}>근무지역</Row>
      <Row h={72}>근무형태</Row>
      <Row h={148}>복리후생</Row>
      <Row h={102}>접수기간</Row>
      <Row h={72}>지원방법</Row>
      <Row h={102}>우대사항</Row>
      <Row h={464}>지원자 통계</Row>
      <Row h={72}>순위비교</Row>
    </Col>
  );
};

const Col = styled.div`
  width: 212px;
  margin-top: 24px;
  margin-bottom: 300px;
`;

const Row = styled.div`
  height: ${({h}) => `${h}px`};
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  padding-top: 23px;
  color: #373f57;
  border-bottom: ${({noborder}) => (noborder ? '' : '1px solid #D7DCE5')};
`;

export default CompareHeader;
