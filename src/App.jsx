import {ThemeProvider} from 'styled-components';
import {themeDefault} from './theme/default';
import {GlobalStyles} from './theme/globalStyle';
import CardList from './compareCard/CardList';

const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles {...themeDefault} />
      <CardList />
    </ThemeProvider>
  );
};

export default App;
