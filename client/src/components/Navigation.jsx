import React from 'react';
import { NavLink as Link } from "react-router-dom";

function Navigation() {
  return (
    <div style={{width:"100%",height:"50px",display:"flex", justifyContent:"space-between",alignItems:"center", backgroundColor:"lightblue",marginBottom:"10px" }}>

        <div style={{width:"50%",display:"flex", justifyContent:"center",alignItems:"center"}}>Product Management System
        </div>

        <div style={{width:"50%",height:"100%",display:"flex",alignItems:"center",gap:"5px"}}>

          <Link to="/create" style={{width:"150px",height:"90%",border:"1px solid #47b352",backgroundColor:"#97db9e",display:"flex", justifyContent:"center",alignItems:"center",borderRadius:"5px",textDecoration:"none"}} >New</Link>

          <Link to="/" style={{width:"150px",height:"90%",border:"1px solid #a8915b",backgroundColor:"#e6ce97",display:"flex", justifyContent:"center",alignItems:"center",borderRadius:"5px",textDecoration:"none"}}>Summary</Link>

        </div>
    </div>
  )
}

export default Navigation