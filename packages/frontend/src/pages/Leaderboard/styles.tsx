import styled from 'styled-components';
import {
  Container,
  TableCell,
  TableHead,
  Typography,
} from '@material-ui/core';
import { green, gray } from '../../themes/colors';

export const LeaderboardContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  font-weight: 600;
  margin-top: 24px;
  font-size: 36px;
  color: ${green};
`;

export const TContainer = styled(Container)`
  margin-top: 12px;
  padding: 0;
  border: 1px solid ${gray};
  max-height: 700px;
  overflow: auto;
`;

export const THead = styled(TableHead)`
  border-bottom: 2px solid ${gray};
`;

export const TCell = styled(TableCell)`
  font-weight: 600;
`;
