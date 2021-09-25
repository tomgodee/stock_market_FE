import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Grid,
} from '@material-ui/core';
import {
  SectorDetailsContainer,
  SectorDetailsContent,
} from './styles';
import { Text } from '../../components/Common/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getOne, selectSector } from '../../reducers/sector';
import { SECTOR_PATH } from '../../config/paths';

const SectorDetails = () => {
  const params = useParams<{sectorId: string}>();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const sectorState = useAppSelector(selectSector);

  useEffect(() => {
    dispatch(getOne(Number(params.sectorId)));
  }, []);

  const handleClick = useCallback((sectorId: number) => {
    history.push(`${SECTOR_PATH}/${sectorId}`);
  }, []);

  return (
    <SectorDetailsContainer maxWidth={false}>
      This is sector details
      <Grid container spacing={6}>
        {sectorState.selectedSector.companies.map((company) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={company.id}>
              <SectorDetailsContent onClick={() => handleClick(company.id)}>
                <Text style={{ fontSize: 24 }}>{company.name}</Text>
              </SectorDetailsContent>
            </Grid>
          );
        })}
      </Grid>
    </SectorDetailsContainer>
  );
};

export default React.memo(SectorDetails);
