import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function Successu()
{
  return (
    <div className="CRUD">
      <header className="CRUD-header">
       <div>
         <div>
           <h1>Updated Player</h1>
         </div>
         <div className="butt2"><Link to="/Update">Back</Link></div>
       </div>
     </header>
    </div>
  );
}
export default Successu;