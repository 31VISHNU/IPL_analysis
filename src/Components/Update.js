import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function Update() {
  return (
    <div className="CRUD">
      <header className="CRUD-header">
        <div className="Button">
          <Link to="/Player_Update"><button>Player Update</button></Link>
          <br></br><br></br>
          <Link to="/Team_Update"><button>Team Update</button></Link>
          <br></br><br></br>
          <Link to="/Match_Update"><button>Match Update</button></Link>
          <br></br><br></br>
          <div className="butt2"><Link to="/CRUD"><button>Back</button></Link></div>
        </div>
      </header>
    </div>
  );
}

export default Update;
