import React, { useState }  from 'react';
import LoginForm from './components/LoginForm'
import './App.css';

function App() {

  const testUser = {
    email: "test@test",
    password: 123,

  }

  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const [error, setError] = useState("");

  const Login = info => {
    console.log(info)
    if (info.email == testUser.email && info.password == testUser.password) {
      console.log("Success!")
      setUser({
        name: info.name,
        email: info.email
      })
    } else {
      console.log("Sorry, we can't find this user.")
      setError("Sorry, we can't find this user.")
    }
  };

  const Logout = () => {
    setUser({
      name: "",
      email: ""
    })
  }

  return (
    <div className="App">
     {
       (user.email != "") ? (
         <div className="welcome">
           <h2>Welcome, <span>{user.name}</span></h2>
           <button onClick={Logout}>Logout</button>
         </div>
       ) : (
         <LoginForm  
         Login={Login}
         error={error}
         />
       )
     }
    </div>
  );
}

export default App;
