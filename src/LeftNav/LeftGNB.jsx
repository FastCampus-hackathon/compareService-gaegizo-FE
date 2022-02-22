import {useState} from 'react';
import styled from 'styled-components';
import NavMemu from './NavMemu';

const LeftGNB = ({show, setShow}) => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <>
      <BackBox navToggle={navToggle} />
      <LeftContainer navToggle={navToggle}>
        <HeaderBox>
          <LogoImg
            src="./leftBarIcons/logoimg.png"
            alt="logo img"
            navToggle={navToggle}
          />
          <LogoTypo
            src="./leftBarIcons/logofont.png"
            alt="logo"
            navToggle={navToggle}
          />
          <BackCircle navToggle={navToggle} />
          <Hide
            src="./leftBarIcons/hidegnb.png"
            alt="hide bar"
            navToggle={navToggle}
            onClick={() => setNavToggle((curr) => !curr)}
          />
        </HeaderBox>
        <NavMemu navToggle={navToggle} show={show} setShow={setShow} />
      </LeftContainer>
    </>
  );
};

const BackBox = styled.div`
  width: ${({navToggle}) => (navToggle ? '72px' : '270px')};
  height: 200vh;
  transition: width 0.5s;
  flex-shrink: 0;
`;

const LeftContainer = styled.div`
  width: ${({navToggle}) => (navToggle ? '72px' : '270px')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 25;
  padding-top: 96px;
  border-right: 1px solid #f0f0f0;
  transition: width 0.4s;
`;

const HeaderBox = styled.div`
  position: absolute;
  top: 42px;
  left: 30px;
`;

const LogoImg = styled.img`
  position: relative;
  width: 24px;
  height: 26px;
  cursor: pointer;
  left: ${({navToggle}) => (navToggle ? '-6px' : '0px')};
`;

const LogoTypo = styled.img`
  position: absolute;
  display: ${({navToggle}) => (navToggle ? 'none' : 'inline')};
  width: 98px;
  height: 26px;
  margin-left: 6px;
  cursor: pointer;
`;

const Hide = styled.img`
  position: absolute;
  top: 2px;
  cursor: pointer;
  right: ${({navToggle}) => (navToggle ? '-30px' : '-190px')};
  ${({navToggle}) =>
    navToggle ? 'transform: scaleX(-1)' : 'transform: scaleX(1)'};
  transition: all 0.4s;
`;

const BackCircle = styled.div`
  position: absolute;
  display: ${({navToggle}) => (navToggle ? 'block' : 'none')};
  top: -2px;
  right: -34px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #f0f0f094;
  background-color: #fff;
`;

export default LeftGNB;
