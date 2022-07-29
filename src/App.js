import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from Node.js
          We are learning Docker.
        </p>
        <a
          className="App-intro">
          I was changed!
          Learn React!
          You'll never walk alone!
        </a> 
      </header>
    </div>
  );
}

export default App;
