import React from 'react';
import styled from 'styled-components';

const ScarpNav = () => {
  return (
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
          <Text>저장된 비교함</Text>
          <CountBox>20</CountBox>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

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
  color: #373f57;
`;

const CountBox = styled.div`
  width: 46px;
  height: 28px;
  line-height: 31px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 40px;
  padding: 0 11px;
  text-align: center;
  color: white;
  background-color: #373f57;
`;

export default ScarpNav;
