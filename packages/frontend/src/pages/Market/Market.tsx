/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie,
} from 'recharts';
import {
  Grid,
} from '@material-ui/core';
import {
  MarketContainer,
} from './styles';
import { Text, Card } from '../../components/Common/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAll, selectCompanyState } from '../../reducers/company';
import { selectUserState } from '../../reducers/user';
import { SECTOR_PATH, COMPANY_PATH } from '../../config/paths';
import CompanyCheckBox from '../../components/CompanyCheckBox';
import { green, salmon } from '../../themes/colors';

const Market = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const companyState = useAppSelector(selectCompanyState);
  const userState = useAppSelector(selectUserState);

  const [isSelected, setIsSelected] = useState<boolean[]>([false]);
  const [data, setData] = useState<any[]>([
    { name: 'Page A', Orange: 900 },
    { name: 'Page B', Orange: 100 },
    { name: 'Page C', Orange: 400 },
  ]);

  const [pieData] = useState([
    [
      {
        name: 'Group A',
        value: 400,
      },
      {
        name: 'Group B',
        value: 1500,
      },
    ],
    [
      {
        name: 'Group A',
        value: 2400,
      },
      {
        name: 'Group B',
        value: 4567,
      },
    ],
  ]);

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

    const newDataState = data.map((item, itemIndex) => {
      item[companyState.companies[index].name] = 100 * (itemIndex + 4);
      return item;
    });
    setData(newDataState);
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 24 }}>Account</Text>
            <Text style={{ fontSize: 24 }}>{userState.money}</Text>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <PieChart width={730} height={250}>
              <Pie data={pieData[1]} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill={salmon} label />
            </PieChart>
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
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="Orange" strokeWidth={4} stroke={green} />
              <Line type="monotone" dataKey="Samsing" strokeWidth={4} stroke={green} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </MarketContainer>
  );
};

export default React.memo(Market);
