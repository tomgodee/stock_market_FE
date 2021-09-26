import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Grid,
} from '@material-ui/core';
import {
  SectorContainer,
  Card,
} from './styles';
import { Text } from '../../components/Common/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getOne, selectCompanyState } from '../../reducers/company';
import { green } from '../../themes/colors';

const CompanyDetails = () => {
  const params = useParams<{companyId: string}>();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { selectedCompany } = useAppSelector(selectCompanyState);

  useEffect(() => {
    dispatch(getOne(Number(params.companyId)));
  }, []);

  return (
    <SectorContainer maxWidth={false}>
      This is CompanyDetails
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={3} lg={2} style={{ borderRight: `2px solid ${green}` }}>Image</Grid>
              <Grid item xs={6} sm={8} md={9} lg={10}>
                <Text style={{ fontSize: 24 }}>{selectedCompany.name}</Text>
                <Text>{selectedCompany.description}</Text>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </SectorContainer>
  );
};

export default React.memo(CompanyDetails);
