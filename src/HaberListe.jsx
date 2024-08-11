import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState ,useEffect} from "react";
import CallMadeIcon from '@mui/icons-material/CallMade';

const HaberListe = ({veri}) => {
  return (
    <div>      
    <ListGroup as="ol" numbered>
      {veri.hits.map((haber)=>{
        return(

       <ListGroup.Item
       key={haber.objectID}
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{haber.title} {haber.created_at}</div> <strong>Yazar : </strong> 
      {haber.author} "  " 
      <button><CallMadeIcon url={haber.url} /></button>
    </div>
    <Badge bg="primary" pill>
     {haber.points}
    </Badge>
  </ListGroup.Item>      
        )


      })}


</ListGroup></div>
  )
}

export default HaberListe