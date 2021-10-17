import './App.css';
import PersonCard from './components/PersonCard';

const peopleArr = [
  {
    lastName: "Dicky",
    firstName: "Tricky",
    age: 22,
    hairColor: "Black",
    
  },  

  {
    lastName: "Loosy",
    firstName: "Lefty",
    age: 33,
    hairColor: "Blonde",
  },
    
  { 
    lastName: "Tighty",
    firstName: "Righty",
    age: 44,
    hairColor:"Brown",
  },  
  
  {  
    lastName: "Birdy",
    firstName: "Dirty",
    age: 55,
    hairColor: "Red",
  },
];

function App(props) {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <PersonCard 
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.age}
          hairColor={personObj.hairColor}        
        />
      ))}

      {/* <PersonCard
        lastName={people[0].lastName}
        firstName={people[0].firstName}
        age={people[0].age}
        hairColor={people[0].hairColor}
      />

      <PersonCard
        lastName={people[1].lastName}
        firstName={people[1].firstName}
        age={people[1].age}
        hairColor={people[1].hairColor}
      />
      
      <PersonCard
        lastName={people[2].lastName}
        firstName={people[2].firstName}
        age={people[2].age}
        hairColor={people[2].hairColor}
      />
      
      <PersonCard
        lastName={people[3].lastName}
        firstName={people[3].firstName}
        age={people[3].age}
        hairColor={people[3].hairColor}   
      /> */}

    </div>
  );
}

export default App;
