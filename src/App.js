import React, {StrictMode} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px',
//     color: 'red', 
//     border: '10px'
//   }
//   return <input 
//           placeholder={holder} 
//           type = "text" 
//           style={styledField}/>
// }

class Field extends React.Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
    width: '300px',
    color: 'red'
    };

    return <input 
            placeholder={holder} 
            type = "text" 
            style={styledField}/>
  }
}


function Btn () {
  const text = "Log In";
   
  const logged = true;
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
        <StrictMode>
          <Header/>
        </StrictMode>
        <Field/>
        <Btn/>
    </div>
  );
}


export {Header};
export default App;
