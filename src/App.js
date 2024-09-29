// App.js
import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';
import Goodbye from './Goodbye.js';
import Greeting from './Greeting.js';

function App() {
  return ( 
    <div className="App green">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        <Goodbye />
        <Greeting />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
