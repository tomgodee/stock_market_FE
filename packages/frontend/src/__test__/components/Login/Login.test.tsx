import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, waitFor, screen, act } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render } from '../../wrapper';
import Login from '../../../pages/Login';

// const server = setupServer(
//   rest.get('/user/login', (req, res, ctx) => {
//     return res(ctx.json({ name: 'tom' }));
//   }),
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

test('Login component works', async () => {
  render(<Login />);
  const usernameInput = screen.getByRole('textbox', { name: /username/i });
  const passwordInput = screen.getByLabelText(/password/);
  let submitButton = screen.getByRole('button');

  expect(usernameInput).toBeVisible();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeDisabled();

  fireEvent.change(usernameInput, {
    target: {
      value: 'tom',
    },
  });
  fireEvent.change(passwordInput, {
    target: {
      value: 'secret',
    },
  });

  submitButton = await screen.findByRole('button');
  expect(submitButton).not.toBeDisabled();
  fireEvent.submit(submitButton);
  await act(() => Promise.resolve());
});
