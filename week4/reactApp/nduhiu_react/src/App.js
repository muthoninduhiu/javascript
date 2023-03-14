import logo from './pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            {/* Your favourite hobby or activity you
                like to do (e.g. for downtime)
              ● Any relevant rules (e.g. how to play if
                its a sport hobby)
              ● Why do you do it, why do you enjoy it
              ● Effectively your hobby 101 website */
            }
        <h1>My favorite hobby is walking my dog</h1>
        <h3>The only rule to walking the little guy is its done everyday lol!</h3>
        <p>I love doing it because it adds energy to my day and i feel amazing after
         . Plus its a great way to stay fit!
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
