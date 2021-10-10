/* eslint-disable no-shadow */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { last } from 'lodash';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Label, LabelList, Cell,
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
import { green, rose, purple, salmon, prussianBlue, yellow, orange } from '../../themes/colors';

const RADIAN = Math.PI / 180;

const CustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Market = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const companyState = useAppSelector(selectCompanyState);
  const userState = useAppSelector(selectUserState);

  const [isSelected, setIsSelected] = useState<boolean[]>([false]);

  const chartColors = [green, rose, purple, salmon, prussianBlue, yellow, orange];

  const lineData = useMemo(() => {
    // eslint-disable-next-line prefer-destructuring
    const length = companyState.companies[0].stock_price.length;
    const data = [];
    for (let i = 0; i < length; i += 1) {
      const singlePointData: any = {};
      for (let j = 0; j < companyState.companies.length; j += 1) {
        singlePointData[companyState.companies[j].name] = companyState.companies[j].stock_price[i];
      }
      data.push(singlePointData);
    }
    return data;
  }, [companyState.companies]);

  const pieData = useMemo(() => {
    return userState.stocks.map((stock) => {
      const company = companyState.companies.find((company) => company.ticker === stock.ticker);
      const price: number = last(company?.stock_price) || 1;
      const pieSlice = { ...stock };
      pieSlice.value = Number((stock.amount * price).toFixed(2));
      return pieSlice;
    });
  }, [userState.stocks]);

  useEffect(() => {
    if (companyState.companies.length < 2) {
      dispatch(getAll());
    }
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 24 }}>Budget</Text>
            <Text style={{ fontSize: 24 }}>${userState.money}</Text>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PieChart width={400} height={250}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              labelLine={false}
              label={<CustomizedLabel />}
            >
              {pieData.map((entry, index) => (
                <Cell key={entry.ticker} fill={chartColors[index % chartColors.length]} />
              ))}
            </Pie>
          </PieChart>
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
            <LineChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              {companyState.companies.map((company, index) => {
                if (isSelected[index]) {
                  return (
                    <Line
                      key={company.id}
                      type="monotone"
                      dataKey={company.name}
                      strokeWidth={4}
                      stroke={chartColors.shift()}
                    />
                  );
                }
                return null;
              })}
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
