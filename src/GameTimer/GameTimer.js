import { useEffect } from 'react';
import { GameState } from '../Shared/GameState';
import './GameTimer.css';

function GameTimer(props) {

  useEffect(() => {
    if (props.secondsRemaining === 0)
      return props.timeRanOut();
    const timeout = setTimeout(() => {
      if (props.gameState === GameState.WON)
        return;
      props.setSecondsRemaining(props.secondsRemaining - 1);
    }, 1000);
    return () => { clearTimeout(timeout) };
  });

  return (
    <>
      Time remaining: {props.secondsRemaining}
    </>
  );
}

export default GameTimer;
