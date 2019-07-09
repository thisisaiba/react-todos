import React, {Component} from 'react';
import {
    Route,
    Link,
    Switch,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom';


//Here's my components


function Home() {
    return (
        <div>
          <h1 >Welcome to React Firebase Todos</h1>
        </div>
    );
}

function Dashboard() {

    return (
        <div>
          <h1 >Welcome to Dashboard</h1>
        </div>
    );
}
function Login() {

    return (
      <div>
        <h1 >You need to be logged in to see this page</h1>
        <button>Login with Google </button>
      </div>
    )
}

class App extends Component {
  render() { 
    return ( 
      <Router>    
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <Switch> 

          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={Login}/>

        </Switch>

      </Router>
     );
  }
}
 
export default App;
