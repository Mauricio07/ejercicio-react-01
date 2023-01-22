import logo from './logo.svg';
import './App.css';
import CardComponent from './components/container/card-component';
import { User } from './models/user.model';


function App() {

  const defaultUser = new User('Mauricio', 'Huertas', 'test@test.com', false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <CardComponent user={defaultUser} ></CardComponent>

      </header>
    </div>
  );
}

export default App;
