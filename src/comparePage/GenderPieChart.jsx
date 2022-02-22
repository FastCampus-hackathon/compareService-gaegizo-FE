import {ResponsivePie} from '@nivo/pie';
import styled from 'styled-components';

const data = [
  {
    id: 'scala',
    label: 'scala',
    value: 56,
    color: 'hsl(116.90721649484536, 48.74371859296483%, 60.98039215686275%)',
  },
  {
    id: 'sass',
    label: 'sass',
    value: 156,
    color: '#5a3b2c',
  },
];

const GenderPieChart = () => {
  return (
    <Box>
      <ResponsivePie
        data={data}
        innerRadius={0.74}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        isInteractive={false}
        animate={false}
        colors={['#FFB3B3', '#BCD1FC']}
        colorBy="index"
      />
      <InfoBox>
        <MaleInfo>
          <div>남자</div>
          <Mpoint>64</Mpoint>%<Sub>507명</Sub>
        </MaleInfo>
        <FeMaleInfo>
          <div>여자</div>
          <Fpoint>36</Fpoint>%<Sub>280명</Sub>
        </FeMaleInfo>
      </InfoBox>
    </Box>
  );
};

const Box = styled.div`
  margin: 0 auto 22px;
  width: 190px;
  height: 190px;
  position: relative;
`;

const InfoBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 58px;
  left: 46px;
  width: 100px;
`;

const MaleInfo = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #5189fa;
  text-align: center;
`;

const FeMaleInfo = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #fa5151;
  text-align: center;
`;

const Mpoint = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -1.5px;
  color: #5189fa;
`;

const Fpoint = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -1.5px;
  color: #fa5151;
`;

const Sub = styled.div`
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.5px;
  color: #8491a7;
`;

export default GenderPieChart;
