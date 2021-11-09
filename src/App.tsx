import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './app/pages/Router';
import { defaultTheme, GlobalStyle } from './atomic';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
