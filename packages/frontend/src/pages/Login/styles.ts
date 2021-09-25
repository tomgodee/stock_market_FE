import styled from 'styled-components';
import {
  Container, Grid, Button,
  TextField, Backdrop, CircularProgress,
} from '@material-ui/core';
import { green, rose, white } from '../../themes/colors';

interface LoginItemGridProps {
  $flex?: boolean;
  $directionColumn?: boolean;
}

export const LoginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const ItemGrid = styled(Grid)`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 360px;
  border: 2px solid ${green};
  border-radius: 5px;
  background-color: ${white};
`;

export const LoginForm = styled.form<LoginItemGridProps>`
  display: ${(props) => (props.$flex ? 'flex' : 'block')};
  flex-direction: ${(props) => (props.$directionColumn ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LoginButton = styled(Button)`
  align-self: center;
  margin-top: 18px;
`;

export const LoginTextField = styled(TextField)`
  margin-bottom: 1rem;
`;

export const LoadingOverlay = styled(Backdrop)`
  z-index: 1;
`;

export const LoadingIcon = styled(CircularProgress)`
  color: ${rose};
` as typeof CircularProgress;
