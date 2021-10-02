import React, { useState } from 'react';
import {
  Checkbox,
  Button,
} from '@material-ui/core';
import {
  CompanyGrid,
} from './styles';
import { Text } from '../Common/styles';
import PurchaseModal from '../PurchaseModal';
import { useAppDispatch } from '../../store/hooks';
import { Company } from '../../types/company';

interface CompanyCheckBoxProps {
  company: Company;
  isSelected: boolean;
  handleClickCompany: (index: number) => void;
  index: number;
}

const CompanyCheckBox = (props: CompanyCheckBoxProps) => {
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <CompanyGrid item xs={12}>
      <Text component="h4" style={{ fontSize: 20 }}>{props.company.ticker} ({props.company.name})</Text>
      <Checkbox
        style={{ marginLeft: 'auto' }}
        checked={props.isSelected || false}
        onChange={() => props.handleClickCompany(props.index)}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setPurchaseModalOpen(true)}
      >
        Buy/Sell
      </Button>
      <PurchaseModal
        open={purchaseModalOpen}
        onClose={() => setPurchaseModalOpen(false)}
        company={props.company}
      />
    </CompanyGrid>
  );
};

export default React.memo(CompanyCheckBox);
