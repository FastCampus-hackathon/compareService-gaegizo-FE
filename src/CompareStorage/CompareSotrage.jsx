import styled from 'styled-components';
import StorageTable from './StorageTable';

const CompareSotrage = () => {
  return (
    <Container>
      <Title>스크랩/관심기업</Title>
      <NavContainer>
        <NavList>
          <NavItem>
            <Text>스크랩</Text>
            <CountBox>20</CountBox>
          </NavItem>
        </NavList>
        <NavList>
          <NavItem>
            <Text>관심기업</Text>
            <CountBox>20</CountBox>
          </NavItem>
        </NavList>
        <NavList>
          <NavItem>
            <Text scrap>저장된 비교함</Text>
            <CountBox scrap>3</CountBox>
          </NavItem>
        </NavList>
      </NavContainer>
      <StorageTable />
      <Banner src="./CompareStorage/foot.png" />
    </Container>
  );
};

const Container = styled.div`
  width: 1248px;
  margin: 0 auto;
  padding-top: 85px;
`;
const Title = styled.p`
  font-weight: 700;
  color: #373f57;
  font-size: 36px;
  margin-bottom: 60px;
`;

const NavContainer = styled.ul`
  height: 28px;
  margin-bottom: 32px;
  display: flex;
`;

const NavList = styled.li`
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavItem = styled.div`
  display: flex;
`;

const Text = styled.p`
  line-height: 28px;
  font-size: 20px;
  font-weight: 700;
  margin-right: 8px;
  color: #8491a7;

  ${(props) => props.scrap && 'color: #373f57;'}
`;

const CountBox = styled.div`
  width: 46px;
  height: 28px;
  line-height: 28px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 40px;
  padding: 0 11px;
  text-align: center;
  color: white;
  background-color: #8491a7;

  ${(props) => props.scrap && 'background-color: #373f57;'}
`;

const Banner = styled.img`
  display: block;
  margin-top: 112px;
`;

export default CompareSotrage;
