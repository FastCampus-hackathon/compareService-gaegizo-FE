import {ThemeProvider} from 'styled-components';
import {themeDefault} from './theme/default';
import {GlobalStyles} from './theme/globalStyle';

const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles {...themeDefault} />
    </ThemeProvider>
  );
};

export default App;
