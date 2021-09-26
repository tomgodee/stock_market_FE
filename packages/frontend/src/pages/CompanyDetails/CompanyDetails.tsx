import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Grid,
} from '@material-ui/core';
import {
  SectorContainer,
} from './styles';
import { Text, Card } from '../../components/Common/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getOne, selectCompanyState } from '../../reducers/company';
import { COMPANY_PATH } from '../../config/paths';

const CompanyDetails = () => {
  const params = useParams<{companyId: string}>();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { selectedCompany } = useAppSelector(selectCompanyState);

  useEffect(() => {
    dispatch(getOne(Number(params.companyId)));
  }, []);

  const handleClick = useCallback((companyId: number) => {
    history.push(`${COMPANY_PATH}/${companyId}`);
  }, []);

  return (
    <SectorContainer maxWidth={false}>
      This is CompanyDetailsss
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <Card>
            <Text style={{ fontSize: 24 }}>{selectedCompany.name}</Text>
          </Card>
        </Grid>
      </Grid>
    </SectorContainer>
  );
};

export default React.memo(CompanyDetails);
