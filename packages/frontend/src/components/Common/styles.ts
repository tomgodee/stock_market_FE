import styled from 'styled-components';
import {
  Button,
  // IconButton,
  Typography,
  CardContent,
} from '@material-ui/core';
import { green } from '../../themes/colors';

export const DefaultButton = styled(Button)`
`;

export const Text = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
`;

export const Card = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  border: 2px solid ${green};
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 4px 4px 16px rgb(0 0 0 / 60%);
  transition: all ease 0.5s;
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 8px 8px 24px rgb(0 0 0 / 60%);
  }
`;
