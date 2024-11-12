//import logo from './logo.svg';
import './App.css';
import x from './x.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={x} className="App-logo" alt="logo" />
        <p>
          I am Kavinda Supun
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is my Portfolio web
        </a>
      </header>
    </div>
  );
}

export default App;
