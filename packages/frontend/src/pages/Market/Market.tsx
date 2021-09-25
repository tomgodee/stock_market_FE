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
import { getAll, selectSector } from '../../reducers/sector';

const Market = () => {
  const dispatch = useAppDispatch();
  const sectorState = useAppSelector(selectSector);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const handleClick = useCallback((sectorId: number) => {

  }, []);

  return (
    <MarketContainer maxWidth={false}>
      This is market
      <Grid container spacing={6}>
        {sectorState.sectors.map((sector) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={sector.id}>
              <Card onClick={() => handleClick(sector.id)}>
                <Text style={{ fontSize: 24 }}>{sector.name}</Text>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </MarketContainer>
  );
};

export default React.memo(Market);
