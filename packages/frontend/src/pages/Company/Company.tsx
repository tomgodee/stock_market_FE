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
import { getAll, selectCompanyState } from '../../reducers/company';
import { COMPANY_PATH } from '../../config/paths';

const Company = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const companyState = useAppSelector(selectCompanyState);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const handleClick = useCallback((companyId: number) => {
    history.push(`${COMPANY_PATH}/${companyId}`);
  }, []);

  return (
    <SectorContainer maxWidth={false}>
      This is company
      <Grid container spacing={6}>
        {companyState.companies.map((company) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={company.id}>
              <Card onClick={() => handleClick(company.id)}>
                <Text style={{ fontSize: 24 }}>{company.name}</Text>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </SectorContainer>
  );
};

export default React.memo(Company);
