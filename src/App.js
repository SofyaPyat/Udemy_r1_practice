import React, {StrictMode} from 'react';
import './App.css';


function WhoAmI({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <WhoAmI name = {() => { return "Artur"}} surname = "Smith" link = "blabla.com"/>
      <WhoAmI name = {() => { return "Alex"}} surname = "Smith" link = "blabla.com"/>
    </div>
  );
}


export default App;
