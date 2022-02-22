import styled from 'styled-components';
import GenderPieChart from './GenderPieChart';
import CompareRanking from './CompareRanking';
import CompareWelfare from './CompareWelfare';
import MainCard from './MainCard';
import SalaryChart from './SalaryChart';
import CompareRegion from './CompareRegion';

const CompareItem = ({data, setForView}) => {
  const {
    region,
    salary,
    title,
    welfare,
    workType,
    sectors,
    averageSalary,
    career,
    companyName,
    deadline,
    education,
    job,
    preferentialTreatment,
  } = data;
  return (
    <Col>
      <Row h={246} noborder nopadding>
        <MainCard
          setForView={setForView}
          companyName={companyName}
          deadline={deadline}
        />
      </Row>
      <Row h={72}>{career}</Row>
      <Row h={72}>{job}</Row>
      <Row h={208}>
        <Salary>{'면접후 결정' === salary ? salary : salary + '만원'}</Salary>
        <SalaryChart salary={salary} ave={averageSalary} />
        <Desc>신입 평균 연봉이에요</Desc>
      </Row>
      <Row h={72}>{sectors}</Row>
      <Row h={102}>
        <CompareRegion />
      </Row>
      <Row h={72}>{workType}</Row>
      <Row h={148}>
        <CompareWelfare />
      </Row>
      <Row h={102}>접수기간</Row>
      <Row h={72}>지원방법</Row>
      <Row h={102}>우대사항</Row>
      <Row h={464}>
        <InfoBox>
          <Counter>
            지원자 수 <Point>767명</Point>
          </Counter>
          <StatisticsBtn>통계전체보기</StatisticsBtn>
        </InfoBox>
        <GenderPieChart />
        <InfoBox>
          <Counter>경력별 현황</Counter>
        </InfoBox>
        <img
          src="./comparepageIcons/easychart.png"
          alt="samplechart"
          style={{paddingLeft: '20px'}}
        />
      </Row>
      <Row h={72}>
        <CompareRanking />
      </Row>
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
  padding: ${({nopadding}) =>
    nopadding ? '0px 0px 0px 16px' : '26px 0px 0px 20px'};
  color: #373f57;
  border-bottom: ${({noborder}) => (noborder ? '' : '1px solid #D7DCE5')};
  position: relative;
`;

const Salary = styled.p`
  position: absolute;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #373f57;
  margin-top: 8px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px 0 0;
  margin-bottom: 22px;
`;
const Counter = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
`;
const Point = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -1px;
  color: #4876ef;
  padding-left: 2px;
`;

const StatisticsBtn = styled.div`
  width: 96px;
  height: 26px;
  border: 1px solid #afbac8;
  border-radius: 4px;
  line-height: 1.6;
  text-align: center;
  cursor: pointer;
`;

export default CompareItem;
