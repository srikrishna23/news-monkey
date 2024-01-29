import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import Spinner from './Components/Spinner';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        {/* <Spinner/> */}
        <Routes>
          <Route  path='/' key="home" element={ <News country="in" category="general"/>} /> 
          <Route  path='/general' key="general" element={ <News country="in" category="general"/>} />  
          <Route exact path='/health' key="health" element={ <News country="in" category="health"/>} />  
          <Route exact path='/science' key="science" element={ <News country="in" category="science"/>} />  
          <Route exact path='/sports' key="sports" element={ <News country="in" category="sports"/>} />  
          <Route exact path='/technology' key="technology" element={ <News country="in" category="technology"/>} />  
          <Route exact path='/entertainment' key="entertainment" element={ <News country="in" category="entertainment"/>} />  
          <Route exact path='/business' key="business" element={ <News country="in" category="business"/>} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
