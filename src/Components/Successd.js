import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function Successd()
{
  return (
    <div className="CRUD">
      <header className="CRUD-header">
       <div>
         <div>
           <h1>Deleted Player</h1>
         </div>
         <div className="butt2"><Link to="/Delete">Back</Link></div>
       </div>
     </header>
    </div>
  );
}
export default Successd;