import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function Team_delete()
{
  return (
    <div className="main">
        <div className='image'></div>
     <div className="sub-main">
       <div>
         <div>
           <h1>Delete Team details</h1>
           <form action="http://localhost:3001/Success" method="post" autocomplete="off">
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Team_Id</label><br></br><br></br>
                            <input type="text" name="Team_Id" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Team_Name</label><br></br><br></br>
                            <input type="text" name="Team_Name" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Team_Short_Code</label><br></br><br></br>
                            <input type="text" name="Team_Short_Code" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <button type="submit" className="label">DELETE</button>
                </form>
           <br></br>
          <div className="butt2"><Link to="/Create"><button>Back</button></Link></div>
          </div>
         </div>
       </div>
    </div>
  );
}
export default Team_delete;