import { Component } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';
import Home from './component/Home';
import Contact from './component/Contact';
import Details from './component/Details';
import Show from './component/Show';
import NoPage from './component/NoPage';
import './App.css';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <Header />
<Routes>
        <Route  path="/"  exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/contact"  exact element={<Contact/>} />
        <Route path="/details" exact element={<Details/>} />
        <Route path ="/film/:title" exact element={<Show/>} />
        <Route path="*" exact element={<NoPage />} />
    
        </Routes>

    </BrowserRouter>
  )
}
}

export default App;


 