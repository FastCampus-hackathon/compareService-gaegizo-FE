import styled from 'styled-components';

const NavMemu = ({navToggle, show, setShow}) => {
  return (
    <ul>
      <li>
        <Items navToggle={navToggle}>
          <Icon
            src="./leftBarIcons/myHome.png"
            alt="my home"
            navToggle={navToggle}
          />
          <Text navToggle={navToggle}>MY홈</Text>
        </Items>
      </li>
      <li>
        <Items navToggle={navToggle}>
          <Icon
            src="./leftBarIcons/writeResume.png"
            alt="resume"
            navToggle={navToggle}
          />
          <Text navToggle={navToggle}>이력서</Text>
        </Items>
      </li>
      <li onClick={() => setShow((curr) => !curr)}>
        <Items navToggle={navToggle} show={show}>
          {show ? (
            <Icon
              src="./leftBarIcons/scrapactive.png"
              alt="scrap"
              navToggle={navToggle}
            />
          ) : (
            <Icon
              src="./leftBarIcons/scrap.png"
              alt="scrap"
              navToggle={navToggle}
            />
          )}
          <Text navToggle={navToggle}>스크랩/관심기업</Text>
        </Items>
      </li>
      <li>
        <Items navToggle={navToggle}>
          <Icon
            src="./leftBarIcons/recommendation.png"
            alt="recommendation"
            navToggle={navToggle}
          />
          <Text navToggle={navToggle}>지원할 만한 공고</Text>
        </Items>
      </li>
      <li>
        <Items navToggle={navToggle}>
          <Icon
            src="./leftBarIcons/movecompany.png"
            alt="movecompany"
            navToggle={navToggle}
          />
          <Text navToggle={navToggle}>이직 제안</Text>
        </Items>
      </li>
      <li>
        <Items navToggle={navToggle}>
          <Icon src="./leftBarIcons/log.png" alt="log" navToggle={navToggle} />
          <Text navToggle={navToggle}>지원내역</Text>
        </Items>
      </li>
      <li>
        <Items navToggle={navToggle}>
          <Icon
            src="./leftBarIcons/searchcompany.png"
            alt="searchcompany"
            navToggle={navToggle}
          />
          <Text navToggle={navToggle}>기업 알아보기</Text>
        </Items>
      </li>
      <li>
        <Items navToggle={navToggle}>
          <Icon
            src="./leftBarIcons/test.png"
            alt="test"
            navToggle={navToggle}
          />
          <Text navToggle={navToggle}>진단/검사</Text>
        </Items>
      </li>
      <li>
        <Items navToggle={navToggle}>
          <Icon
            src="./leftBarIcons/interview.png"
            alt="interview"
            navToggle={navToggle}
          />
          <Text navToggle={navToggle}>면접현황</Text>
        </Items>
      </li>
    </ul>
  );
};

const Text = styled.div`
  opacity: ${({navToggle}) => (navToggle ? 0 : 1)};
  flex-shrink: 0;
`;

const Items = styled.a`
  margin: ${({navToggle}) => (navToggle ? '16px 0 0' : '16px auto 0')};
  width: ${({navToggle}) => (navToggle ? '72px' : '240px')};
  color: ${({show}) => (show ? '#4876EF' : '#5c667b')};
  height: 44px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 14px;
  border-radius: 4px;
  background-color: ${({show}) => (show ? '#eff5ff' : '#fff')};
  cursor: pointer;
  transition: all 0.6s;
  &:hover {
    background-color: #eff5ff;
  }
`;

const Icon = styled.img`
  margin-left: ${({navToggle}) => (navToggle ? '10px' : '0px')};
`;

export default NavMemu;
