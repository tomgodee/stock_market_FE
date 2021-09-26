/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  Container,
  Grid,
} from '@material-ui/core';
import { green } from '../../themes/colors';

export const CompanyCheckBoxContainer = styled.div`
  margin-top: 12px;
  display: flex;
`;

export const CompanyGrid = styled(Grid)`
  padding: 12px;
  border: 2px solid ${green};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0px;
  }
`;
