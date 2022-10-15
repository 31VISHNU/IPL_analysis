import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function Match()
{
  return (
    <div className="main">
        <div className='image'></div>
     <div className="sub-main">
       <div>
         <div>
           <h1>Add Match details</h1>
           <form action="http://localhost:3001/Success" method="post" autocomplete="off">
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Match_Id</label><br></br><br></br>
                            <input type="text" name="Match_ID" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Match_Date</label><br></br><br></br>
                            <input type="text" name="Match_Date" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Team_Name_Id</label><br></br><br></br>
                            <input type="text" name="Team_Name_Id" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Opponent_Team_ID</label><br></br><br></br>
                            <input type="Number" name="Opponent_Team_ID" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Season_ID</label><br></br><br></br>
                            <input type="Number" name="Season_ID" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Venue_Name</label><br></br><br></br>
                            <input type="Number" name="Venue_Name" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Toss_Winner_Id</label><br></br><br></br>
                            <input type="text" name="Toss_Winner_Id" className="textbox"></input><br></br><br></br>
                        </td>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Toss_Decision</label><br></br><br></br>
                            <input type="text" name="Toss_Decision" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Is_Superover</label><br></br><br></br>
                            <input type="Number" name="Is_Superover" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Is_Result</label><br></br><br></br>
                            <input type="text" name="Is_Result" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Is_DuckWorthLewis</label><br></br><br></br>
                            <input type="Number" name="Is_DuckWorthLewis" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Win_Type</label><br></br><br></br>
                            <input type="text" name="Win_Type" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Won_By</label><br></br><br></br>
                            <input type="Number" name="Won_By" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Match_Winner_Id</label><br></br><br></br>
                            <input type="text" name="Match_Winner_Id" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Man_of_the_Match</label><br></br><br></br>
                            <input type="Number" name="Man_of_the_Match" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">First_Umpire_Id</label><br></br><br></br>
                            <input type="text" name="First_Umpire_Id" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Second_Umpire_Id</label><br></br><br></br>
                            <input type="Number" name="Second_Umpire_Id" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">City_Name</label><br></br><br></br>
                            <input type="text" name="City_Name" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Host_Country</label><br></br><br></br>
                            <input type="Number" name="Host_Country" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <button type="submit" className="label">INSERT</button>
                </form>
           <br></br>
          <div className="butt2"><Link to="/Create"><button>Back</button></Link></div>
          </div>
         </div>
       </div>
    </div>
  );
}
export default Match;