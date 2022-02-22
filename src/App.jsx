import {ThemeProvider} from 'styled-components';
import {themeDefault} from './theme/default';
import {GlobalStyles} from './theme/globalStyle';
import LeftGNB from './LeftNav/LeftGNB';
import {useState} from 'react';

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles {...themeDefault} />
      <div style={{display: 'flex'}}>
        <LeftGNB show={show} setShow={setShow} />
        <div>next</div>
      </div>
    </ThemeProvider>
  );
};

export default App;
