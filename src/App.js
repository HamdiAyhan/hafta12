import { Alert } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState ,useEffect} from "react";
import CallMadeIcon from '@mui/icons-material/CallMade';




function App() {
  const url="https://hn.algolia.com/api/v1/search?query=javascript"
  const [veri, setveri] = useState({hits : []})
  useEffect(() => {
   const veriCek = async ()=>{
    const sonuc = await fetch (url)
    const jsSonuc = await sonuc.json()
    setveri(jsSonuc)
   }
   veriCek()
  },[])
  console.log(veri.hits)
  return (
    <section className="container mt-5">
      <div className="row" >
        <div className="col" >
          <h1>JavaScript Haberler</h1>
        <ListGroup as="ol" numbered>
          {veri.hits.map((haber)=>{
            return(

           <ListGroup.Item
           key={haber.story_id}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{haber.title}</div> <strong>Yazar : </strong> 
          {haber.author}
          <button><CallMadeIcon url={haber.url} /></button>
        </div>
        <Badge bg="primary" pill>
         {haber.points}
        </Badge>
      </ListGroup.Item>      
            )


          })}
    

    </ListGroup>
<Alert variant="success" >selam N'ber</Alert>
        </div>
      </div>

    </section>
  );
}

export default App;
