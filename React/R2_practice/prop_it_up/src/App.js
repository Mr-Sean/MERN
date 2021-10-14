import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App(props) {
  return (
    <div className="App">
      <PersonCard
      lastName={"Dicky"}
      firstName={"Tricky"}
      age={22}
      hairColor={"Black"}
      />
      <PersonCard
      lastName={"Loosy"}
      firstName={"Lefty"}
      age={33}
      hairColor={"Blonde"}
      />
      <PersonCard
      lastName={"Tighty"}
      firstName={"Righty"}
      age={44}
      hairColor={"Brown"}
      />
      <PersonCard
      lastName={"Birdy"}
      firstName={"Dirty"}
      age={55}
      hairColor={"Red"}
      />


    </div>
  );
}

export default App;
