import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function Player_delete()
{
  return (
    <div className="main">
        <div className='image'></div>
     <div className="sub-main">
       <div>
         <div>
           <h1>Delete player details</h1>
           <form action="http://localhost:3001/Success" method="post" autocomplete="off">
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Player Id</label><br></br><br></br>
                            <input type="text" name="Player_ID" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Player Name</label><br></br><br></br>
                            <input type="text" name="Player Name" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">DOB</label><br></br><br></br>
                            <input type="text" name="DOB" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Batting Hand</label><br></br><br></br>
                            <input type="Number" name="Batting Hand" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Bowling Skill</label><br></br><br></br>
                            <input type="Number" name="Bowling Skill" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Country</label><br></br><br></br>
                            <input type="Number" name="Country" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Is_Umpire</label><br></br><br></br>
                            <input type="text" name="Is_Umpire" className="textbox"></input><br></br><br></br>
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
export default Player_delete;