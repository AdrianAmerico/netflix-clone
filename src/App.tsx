import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './app/pages/Routes';
import { defaultTheme, GlobalStyle } from './atomic';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
