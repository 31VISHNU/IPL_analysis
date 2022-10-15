import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import logos from './logos.jpg';
function Read()
{
  return (
    <div className="readmain">
        <img src={logos} className="App-logo" alt="logo" />
       <div>
         <div>
          <div className="butt2"><Link to="/CRUD">Top Scorer for Delhi(2009)</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">List players with more 6s in 2013(5 player)</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">List venues that has hosted more matches in ascending order (5 venue)</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">List venues that has more DLS (5 venue)</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">List teams based on winning matches (5 team)</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">Highest margin of victory by runs in time(2008-2012)</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">Highest margin of victory by balls(2012-2015)</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">List bowlers who bowled more wickets for team CSK in 2012 in descending order (5 player)</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">List seasons based on no. of 4s(5 seasons)</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">Total runs scored in first 10 matches of 2010</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">Total wickets taken from playoffs of 2014-2016</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">Total wickets taken by ashwin</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">Total runs scored by No.1(Position) batsman in 2008</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">Highest run scored by a no. 11 batsman in 2016</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">List top 5 players who has taken more catches from 2008 to 2014</Link></div>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD">Back</Link></div>
          <br></br><br></br>
          </div>
         </div>
    </div>
  );
}
export default Read;