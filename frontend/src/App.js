import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Navigation'
import NoteList from './components/NoteList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
      <Router>
          <Nav />
        <div className="container p-4">
          <Route exact path="/" component={ NoteList } />
          <Route exact path="/edit/:id" component={CreateNote} />
          <Route exact path="/create" component={CreateNote} />
          <Route exact path="/createUser" component={CreateUser} />
        </div>
      </Router>
  );
}

export default App;
