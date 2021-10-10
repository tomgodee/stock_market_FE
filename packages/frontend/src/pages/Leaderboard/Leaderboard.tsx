import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getTopScores } from '../../reducers/score';
// import {
//   LoginContainer as Container,
// } from './styles';

const Leaderboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopScores());
  }, []);

  return (
    <div>This is Leaderboard</div>
  );
};

export default React.memo(Leaderboard);
