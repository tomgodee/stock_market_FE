import React from 'react';
import {
  Checkbox,
} from '@material-ui/core';
import {
  CompanyGrid,
} from './styles';
import { Text } from '../Common/styles';
import { useAppDispatch } from '../../store/hooks';
import { Company } from '../../types/company';

interface CompanyCheckBoxProps {
  company: Company;
  isSelected: boolean;
  handleClickCompany: (index: number) => void;
  index: number;
}

const CompanyCheckBox = (props: CompanyCheckBoxProps) => {
  const dispatch = useAppDispatch();

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
