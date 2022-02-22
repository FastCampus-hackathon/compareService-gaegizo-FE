import {ThemeProvider} from 'styled-components';
import {themeDefault} from './theme/default';
import {GlobalStyles} from './theme/globalStyle';
import LeftGNB from './LeftNav/LeftGNB';
import {useEffect, useState} from 'react';
import CardList from './compareCard/CardList';
import ScarpNav from './scrap/ScarpNav';
import ScrapFilter from './scrap/ScrapFilter';
import ScrapList from './scrap/ScrapList';
import ComparePage from './ComparePage/ComparePage';
import CompareSotrage from './CompareStorage/CompareSotrage';

const App = () => {
  const [show, setShow] = useState(false);
  const [isCompare, setIsCompare] = useState(false);
  const [isStorage, setIsStorage] = useState(false);
  const [compareList, setCompareList] = useState([0, 0, 0]);

  const handleCompareList = (list) => {
    const {id, company, title, tag} = list;
    setCompareList([{id, company, title, tag}, ...compareList]);
  };
  useEffect(() => {
    if (isStorage) {
      setShow(false);
      setIsCompare(false);
    }
  }, [isStorage]);

  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles {...themeDefault} />
      <div style={{display: 'flex'}}>
        <LeftGNB show={show} setShow={setShow} setIsCompare={setIsCompare} />
        {show && (
          <div style={{margin: '0 auto'}}>
            {isCompare ? (
              <ComparePage />
            ) : (
              <>
                <CardList list={compareList} setIsCompare={setIsCompare} />
                <ScarpNav setIsStorage={setIsStorage} />
                <ScrapFilter />
                <ScrapList onAddCompare={handleCompareList} />
              </>
            )}
          </div>
        )}
        {isStorage && <CompareSotrage />}
      </div>
    </ThemeProvider>
  );
};

export default App;
