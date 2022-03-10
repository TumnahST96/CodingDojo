import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stuff from './components/Stuff';

function App() {
    return ( 
        
        <div className = "App" >
        <Stuff
        text="hello"
        />
        <Stuff
        text="Tamma"
        />
        <h1 > hello Dojo! </h1> 
        


        <
        h2 > Things I need to do : < /h2>   <
        li > Learn React < /li>   <
        li > Learn Mern < /li>  <
        li > Eat more sushi < /li>  <
        li > Buy a car < /li>  
        </div>
    );
}

export default App;