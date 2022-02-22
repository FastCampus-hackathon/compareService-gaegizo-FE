import {ThemeProvider} from 'styled-components';
import {themeDefault} from './theme/default';
import {GlobalStyles} from './theme/globalStyle';
import LeftGNB from './LeftNav/LeftGNB';
import {useState} from 'react';
import CardList from './compareCard/CardList';
import ScarpNav from './scrap/ScarpNav';
import ScrapFilter from './scrap/ScrapFilter';
import ScrapList from './scrap/ScrapList';
import ComparePage from './ComparePage/ComparePage';

const App = () => {
  const [show, setShow] = useState(false);
  const [compareList, setCompareList] = useState([]);

  const handleCompareList = (list) => {
    const {id, company, title, tag} = list;

    if (2 < compareList.length) {
      alert('비교 항목은 최대 3개만 담을 수 있습니다.');
      return;
    }

    setCompareList([{id, company, title, tag}, ...compareList]);
  };

  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles {...themeDefault} />
      <div style={{display: 'flex'}}>
        <LeftGNB show={show} setShow={setShow} />
        {show && (
          <div style={{margin: '0 auto'}}>
            <CardList list={compareList} />
            <ScarpNav />
            <ScrapFilter />
            <ScrapList onAddCompare={handleCompareList} />
          </div>
        )}
        {!show && <ComparePage />}
      </div>
    </ThemeProvider>
  );
};

export default App;
