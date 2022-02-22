import {ThemeProvider} from 'styled-components';
import {themeDefault} from './theme/default';
import {GlobalStyles} from './theme/globalStyle';
import CardList from './compareCard/CardList';
import ScarpNav from './scrap/ScarpNav';
import ScrapFilter from './scrap/ScrapFilter';

const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles {...themeDefault} />
      <CardList />
      <ScarpNav />
      <ScrapFilter />
    </ThemeProvider>
  );
};

export default App;
