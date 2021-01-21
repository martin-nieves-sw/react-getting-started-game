import './Controls.css';

function Controls(props) {
  const controlStyles = (i) => {
    if (props.selectedNumbers.includes(i + 1))
      return { backgroundColor: props.invalidSelection ? 'red' : 'lightblue' };
    if (props.completedNumbers.includes(i + 1))
      return { backgroundColor: 'lightgreen' };
    return {};
  }
  return (
    <>
      {Array(props.controlsAmount).fill().map((_, i) =>
        <button
          key={i + 1}
          className="Control"
          style={controlStyles(i)}
          disabled={props.disableControls || props.completedNumbers.includes(i + 1)}
          onClick={() => props.onControlClicked(i + 1)}
        >
          {i + 1}
        </button>
      )}
    </>
  );
}

export default Controls;
