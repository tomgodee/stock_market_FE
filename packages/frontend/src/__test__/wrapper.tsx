import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from '../store';
import theme from '../themes';

const AllTheProviders: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
