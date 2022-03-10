import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

var peopleArr = [
  {"firstName" : "Jane", "lastName": "Doe", "Age": 45, "hairColor": "Black"},
  {"firstName" : "John", "lastName": "Smith", "Age": 88, "hairColor": "Brown"},
  {"firstName" : "Millard", "lastName": "Filmore", "Age": 50, "hairColor": "Brown"},
  {"firstName" : "Maria", "lastName": "Smith", "Age": 62, "hairColor": "Brown"}
]

function App() {
  return (
    <div className="App">
      {peopleArr.map(person =>{
        return <PersonCard firstName = {person.firstName} lastName = {person.lastName} Age = {person.Age} hairColor = {person.hairColor}/>
        })}
    </div>
  );
}

export default App;
