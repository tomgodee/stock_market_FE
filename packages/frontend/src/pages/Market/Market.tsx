import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Grid,
} from '@material-ui/core';
import {
  MarketContainer,
} from './styles';
import { Text, Card } from '../../components/Common/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAll, selectCompanyState } from '../../reducers/company';
import { SECTOR_PATH, COMPANY_PATH } from '../../config/paths';
import CompanyCheckBox from '../../components/CompanyCheckBox';

const Market = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const companyState = useAppSelector(selectCompanyState);

  const [isSelected, setIsSelected] = useState<boolean[]>([false]);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  useEffect(() => {
    const state = companyState.companies.map(() => false);
    setIsSelected(state);
  }, [companyState.companies.length]);

  const handleClickHeader = useCallback((path: string) => {
    history.push(path);
  }, []);

  const handleClickCompany = useCallback((index: number) => {
    const newState = isSelected.slice();
    newState[index] = !newState[index];
    setIsSelected(newState);
  }, [isSelected]);

  return (
    <MarketContainer maxWidth={false}>
      This is market
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card onClick={() => handleClickHeader(SECTOR_PATH)}>
            <Text style={{ fontSize: 24 }}>Sectors</Text>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card onClick={() => handleClickHeader(COMPANY_PATH)}>
            <Text style={{ fontSize: 24 }}>Companies</Text>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4} lg={3} style={{ height: 'calc(100vh - 300px)', overflow: 'auto', marginTop: 12 }}>
          {companyState.companies.map((company, index) => (
            <CompanyCheckBox
              key={company.id}
              company={company}
              isSelected={isSelected[index]}
              handleClickCompany={handleClickCompany}
              index={index}
            />
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={8} lg={9}>
          Chart
        </Grid>
      </Grid>
    </MarketContainer>
  );
};

export default React.memo(Market);
