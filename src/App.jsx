
import { useEffect, useState } from 'react';
import './App.css';

const singers = [
  {name:'agun', job:'hellow'}, 
  {name:'james', job:'kelo'}, 
]

function App() {

  //const persons = ['hafijur','karim','babul','sumon','tahira'];
  return (
      <div className="App">
        <div className="container">
          {
            singers.map(singer => <><Person name={singer.name} job={singer.job}></Person></>)
          }
          {/* <Person name="Hafijur" job="developer"></Person> */}
        </div>

        <Counter></Counter>

        <ExternalUsers></ExternalUsers>
      </div>
  );
}

// external users
function ExternalUsers(){

  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[]);

  return(
    <div>
      <h1>External Users</h1>
      {
        users.map(user => <><User name={user.name} email={user.email}></User></>)
      }
    </div>
   
  )
}

//user component
function User(Props){
  return(
    <div style={{border:'1px solid red',margin:'20px'}}>
      <h3>Name:{Props.name} </h3>
      <h4>Email:{Props.email} </h4>
    </div>
  )
}

// counter app
function Counter(){
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return(
    <div>
          <h1>Count: {count}</h1>
          <button onClick={increaseCount}>Increase</button>
          <button onClick={decreaseCount}>Decrease</button>
        </div>
  )
}


function Person(Props){
  return (
    <div className="person">
      <h1>{Props.name}</h1>
      <h1>{Props.job}</h1>
      
    </div>
  );
}


export default App
