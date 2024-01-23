
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Action({ value, onDelete }) {
    console.log("value",value)
    const handleDelete = () => {
    onDelete(value);
  };
  let view = `/${value}`;
  let edit = `/update/${value}`
  return (
    <div style={{height:"100%", display: 'flex',alignItems:"center", gap: '10px', textDecoration:"none"}}>
      <button style={{color:"black",backgroundColor:"#d5f5ce", border:"1px solid #73a867",padding:"5px", borderRadius:"5px"}} >
        <Link to={view} style={{color:"black"}} > <FontAwesomeIcon icon={faEye} /></Link>
      </button>
      <button style={{color:"black",backgroundColor:"#ced3f5", border:"1px solid #858b99",padding:"5px", borderRadius:"5px"}}>
        <Link to={edit} style={{color:"black"}}><FontAwesomeIcon icon={faEdit} /></Link>
      </button>
      <button style={{color:"black",backgroundColor:"#f5ced5", border:"1px solid #f03756",padding:"5px", borderRadius:"5px"}} onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  )
}

export default Action;
