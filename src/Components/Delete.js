import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function Delete() {
  return (
    <div className="CRUD">
      <header className="CRUD-header">
        <div className="Button">
          <Link to="/Player_delete"><button>Player</button></Link>
          <br></br><br></br>
          <Link to="/Team_delete"><button>Team</button></Link>
          <br></br><br></br>
          <Link to="/Match_delete"><button>Match</button></Link>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD"><button>Back</button></Link></div>
        </div>
      </header>
    </div>
  );
}

export default Delete;
