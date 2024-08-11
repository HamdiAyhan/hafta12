import { Alert } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState ,useEffect} from "react";
import CallMadeIcon from '@mui/icons-material/CallMade';
import HaberListe from "./HaberListe";




function App() {
   const [sorgu, setSorgu] = useState("javascript")
  const url=`https://hn.algolia.com/api/v1/search?query=${sorgu}`
  const [veri, setveri] = useState({hits : []})
 const [loading, setLoading] = useState(false)
  const [inpuveri, setinpuVeri] = useState("")


  useEffect(() => {
    setLoading(true)
   const veriCek = async ()=>{
    const sonuc = await fetch (url)
    const jsSonuc = await sonuc.json()
    setveri(jsSonuc)
    setLoading(false)
   }
   veriCek()
  },[sorgu])

  function aramaBaslat(){
setSorgu(inpuveri)
  }


  console.log(veri.hits)
  return (
    <section className="container mt-5">
      <div className="row" >
        <div className="col" >
          <div className="d-flex justify-content-between align-items-center" >
              <h1>{sorgu} Haberler</h1>
              <input onChange={(olay)=>setinpuVeri(olay.target.value)} className="form-control" type="text " placeholder="Ne Aramıştınız ?"></input>
              <buton onClick={aramaBaslat} className="btn btn-primary btn-sm" >Ara</buton>
          </div>
          {loading === true ? <p>Loading.....</p> : <HaberListe veri={veri} /> }
 
<Alert variant="success" >selam N'ber</Alert>
        </div>
      </div>

    </section>
  );
}

export default App;
