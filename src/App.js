import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./Components/HomePage";
import CRUD from "./Components/CRUD";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Success from "./Components/Success";
import Successu from "./Components/Successu";
import Successd from "./Components/Successd";
import Update from "./Components/Update";
import Delete from "./Components/Delete";
import Player from "./Components/Player";
import Team from "./Components/Team";
import Match from "./Components/Match";
import Player_Update from "./Components/Player_Update";
import Match_Update from "./Components/Match_Update";
import Team_Update from "./Components/Team_Update";
import Team_delete from "./Components/Team_delete";
import Player_delete from "./Components/Player_delete";
import Match_delete from "./Components/Match_delete";
function App()
{
  return(
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>  
          <Route path='/CRUD' element={<CRUD/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Success' element={<Success/>}/>
          <Route path='/Read' element={<Read/>}/>
          <Route path='/Update' element={<Update/>}/>
          <Route path='/Successu' element={<Successu/>}/>
          <Route path='/Delete' element={<Delete/>}/>
          <Route path='/Successd' element={<Successd/>}/>
          <Route path='/Player' element={<Player/>}/>
          <Route path='/Team' element={<Team/>}/>
          <Route path='/Match' element={<Match/>}/>
          <Route path='/Player_Update' element={<Player_Update/>}/>
          <Route path='/Team_Update' element={<Team_Update/>}/>
          <Route path='/Match_Update' element={<Match_Update/>}/>
          <Route path='/Player_delete' element={<Player_delete/>}/>
          <Route path='/Team_delete' element={<Team_delete/>}/>
          <Route path='/Match_delete' element={<Match_delete/>}/>
        </Routes>
      </Router>
  );
}

export default App;