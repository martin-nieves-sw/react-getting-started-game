import { useState } from 'react';
import Controls from '../Controls/Controls';
import GameFinished from '../GameFinished/GameFinished';
import GameTimer from '../GameTimer/GameTimer';
import { GameState } from '../Shared/GameState';
import { randomSumIn, getRandomInt } from '../Shared/Utils';
import Stars from '../Stars/Stars';
import './GameArea.css';

function GameArea() {
  const BOARD_SIZE = 9;
  const TIMEOUT_SECONDS = 10;
  const TRYHARD_TIMEOUT_SECONDS = 3;

  const [gameState, setGameState] = useState(GameState.PLAYING);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [completedNumbers, setCompletedNumbers] = useState([]);
  const [stars, setStars] = useState(getRandomInt(1, BOARD_SIZE));
  const [invalidSelection, setInvalidSelection] = useState(false);
  const [disableControls, setDisableControls] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(TIMEOUT_SECONDS);
  const [tryhardMode, setTryhardMode] = useState(false);


  const selectedNumber = (index) => {
    const newSelectedNumbers = selectedNumbers.includes(index) ? selectedNumbers.filter(x => x !== index) : selectedNumbers.concat(index);
    setSelectedNumbers(newSelectedNumbers);
    const sum = newSelectedNumbers.reduce((a, b) => a + b, 0);
    setInvalidSelection(sum > stars);
    if (sum === stars) {
      setSelectedNumbers([]);
      const newCompletedNumbers = completedNumbers.concat(newSelectedNumbers);
      setCompletedNumbers(newCompletedNumbers);
      // Game won
      if (newCompletedNumbers.length === BOARD_SIZE) {
        return setGameState(GameState.WON);
      }
      const remainingValues = Array(BOARD_SIZE).fill().map((x, i) => x = i + 1).filter(x => !newCompletedNumbers.includes(x))
      setStars(randomSumIn(remainingValues, BOARD_SIZE));
    }
  }

  const timeRanOut = () => {
    setDisableControls(true);
    return setGameState(GameState.LOST);
  }

  const startNewGame = (tryhard = false) => {
    setSelectedNumbers([]);
    setCompletedNumbers([]);
    setStars(getRandomInt(1, BOARD_SIZE));
    setInvalidSelection(false);
    setDisableControls(false);
    setGameState(GameState.PLAYING);
    setTryhardMode(tryhard);
    setSecondsRemaining(tryhard ? TRYHARD_TIMEOUT_SECONDS : TIMEOUT_SECONDS);
    setTryhardMode(tryhard);
  }

  return (
    <div>
      <div className="Header">
        Pick 1 or more number that sums to the value of stars
      </div>
      <div className="Flex">
        <div className="GameBlock" style={tryhardMode ? { borderColor: 'red' } : {}}>
          {
            gameState === GameState.PLAYING
              ? <Stars stars={stars} />
              : <GameFinished
                gameState={gameState}
                startNewGame={startNewGame}
                tryhardMode={tryhardMode}
                setTryhardMode={setTryhardMode}
              />
          }
        </div>
        <div className="GameBlock" style={tryhardMode ? { borderColor: 'red' } : {}}>
          <Controls
            controlsAmount={BOARD_SIZE}
            disableControls={disableControls}
            onControlClicked={selectedNumber}
            selectedNumbers={selectedNumbers}
            completedNumbers={completedNumbers}
            invalidSelection={invalidSelection}
          />
        </div>
      </div>
      <div className="Footer">
        <GameTimer
          timeRanOut={timeRanOut}
          secondsRemaining={secondsRemaining}
          setSecondsRemaining={setSecondsRemaining}
          gameState={gameState}
        />
      </div>
    </div >
  );
}

export default GameArea;
