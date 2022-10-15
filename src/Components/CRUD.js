import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function CRUD() {
  return (
    <div className="CRUD">
      <header className="CRUD-header">
        <div className="Button">
          <Link to="/Create"><button>Create</button></Link>
          <br></br><br></br>
          <Link to="/Read"><button>Read</button></Link>
          <br></br><br></br>
          <Link to="/Update"><button>Update</button></Link>
          <br></br><br></br>
          <Link to="/Delete"><button>Delete</button></Link>
          <br></br><br></br>
        </div>
      </header>
    </div>
  );
}

export default CRUD;
