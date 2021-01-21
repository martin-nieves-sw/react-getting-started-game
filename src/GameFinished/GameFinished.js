import './GameFinished.css';
import { GameState } from '../Shared/GameState';

function GameFinished(props) {
  return (
    <div className="FlexColumn">
      <div>
        <h2 style={{ color: props.gameState === GameState.LOST ? 'red' : 'green' }}>
          {props.gameState === GameState.LOST ? <>Game over, better luck next time.</> : <>Congratulations!<br />You won.</>}
        </h2>
      </div>
      <div>
        <button onClick={() => props.startNewGame(props.tryhardMode)}>
          {props.gameState === GameState.LOST ? 'Try again' : 'Play again'}
        </button>
        <div></div>
        <div className="TryhardButtons">
          {
            props.gameState === GameState.LOST && props.tryhardMode &&
            <>
              <div>Too hard?</div>
              <button onClick={() => { props.startNewGame(false) }}>
                Normal mode
            </button>
            </>
          }
          {
            props.gameState === GameState.WON && !props.tryhardMode &&
            <>
              <div>Too easy?</div>
              <button className="TryhardMode" onClick={() => { props.startNewGame(true) }}>
                Tryhard mode
              </button>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default GameFinished;
