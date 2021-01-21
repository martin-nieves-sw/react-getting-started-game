import './Stars.css';
import logo from '../logo.svg';

function Stars(props) {
  return (
    <>
      {Array(props.stars).fill().map((_, i) =>
        <img
          key={i + 1}
          src={logo}
          className="App-logo"
          alt="logo"
        />
      )}
    </>
  );
}

export default Stars;
