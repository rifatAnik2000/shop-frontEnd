import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'anik';
  const status = false;
  return (
    <div className="App">
      <h1 className="name">hello {status ? name: 'someone'}</h1>
    </div>
  );
}

export default App;
