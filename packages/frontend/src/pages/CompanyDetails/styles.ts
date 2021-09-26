import styled from 'styled-components';
import {
  Container,
  CardContent,
} from '@material-ui/core';
import { green } from '../../themes/colors';

export const SectorContainer = styled(Container)`
  margin-top: 36px;
`;

export const Card = styled(CardContent)`
  display: flex;
  border: 2px solid ${green};
  border-radius: 4px;
  box-shadow: 4px 4px 16px rgb(0 0 0 / 60%);
`;
