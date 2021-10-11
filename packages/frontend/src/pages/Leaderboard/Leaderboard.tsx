import React, { useEffect } from 'react';
import moment from 'moment';
import {
  Table, TableBody, TableRow, Typography, Button,
} from '@material-ui/core';
import {
  LeaderboardContainer,
  Title,
  TContainer,
  THead,
  TCell,
} from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getTopScores, selectScoreState } from '../../reducers/score';
import { green } from '../../themes/colors';
import { capitalize } from '../../utils/helpers';
import { MARKET_PATH } from '../../config/paths';

const Leaderboard = () => {
  const dispatch = useAppDispatch();

  const scoreState = useAppSelector(selectScoreState);

  useEffect(() => {
    dispatch(getTopScores());
  }, []);

  return (
    <LeaderboardContainer>
      <Title align="center">Leaderboard</Title>
      <TContainer>
        <Table aria-label="simple table" component="table">
          <THead>
            <TableRow>
              <TCell align="center">Rank</TCell>
              <TCell align="left">Player Name</TCell>
              <TCell align="left">Score</TCell>
              <TCell align="left">Date</TCell>
            </TableRow>
          </THead>
          <TableBody>
            {scoreState.topScores.map((score, index) => (
              <TableRow
                key={score.id}
              >
                <TCell component="th" scope="row" align="center">
                  {index + 1}
                </TCell>
                <TCell align="left" style={{ textTransform: 'capitalize', color: green }}>{score.user.name}</TCell>
                <TCell align="left">{score.score}</TCell>
                <TCell align="left">
                  <Typography style={{ fontWeight: 600 }}>
                    {capitalize(moment(score.createdAt).fromNow())}
                  </Typography>
                  <Typography>
                    {moment(score.createdAt).format('DD/MM/YYYY')}
                  </Typography>
                </TCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TContainer>
      <Button
        type="button"
        variant="contained"
        color="primary"
        style={{ marginTop: 24, alignSelf: 'center' }}
        onClick={() => {
          window.location.href = MARKET_PATH;
        }}
      >
        Play again
      </Button>
    </LeaderboardContainer>
  );
};

export default React.memo(Leaderboard);
