import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Checkbox,
} from '@material-ui/core';
import {
  CompanyCheckBoxContainer,
  CompanyGrid,
} from './styles';
import { Text } from '../Common/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAll, selectCompanyState } from '../../reducers/company';
import { COMPANY_PATH } from '../../config/paths';
import { Company } from '../../types/company';

interface CompanyCheckBoxProps {
  company: Company;
  isSelected: boolean;
  handleClickCompany: (index: number) => void;
  index: number;
}

const CompanyCheckBox = (props: CompanyCheckBoxProps) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <CompanyGrid item xs={12}>
      <Text component="h4" style={{ fontSize: 20 }}>{props.company.name}</Text>
      <Checkbox
        checked={props.isSelected || false}
        onChange={() => props.handleClickCompany(props.index)}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </CompanyGrid>
  );
};

export default React.memo(CompanyCheckBox);
