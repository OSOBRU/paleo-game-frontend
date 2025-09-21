import React, { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_URL;

export default function App(){
  const [docs, setDocs] = useState([]);

  useEffect(()=>{
    fetch(`${API}/documentos`)
      .then(r=>r.json())
      .then(setDocs);
  },[]);

  return (
    <div style={{maxWidth:960, margin:'20px auto', fontFamily:'system-ui'}}>
      <h1>Juego de Paleografía</h1>
      <h2>Documentos disponibles</h2>
      <ul>
        {docs.map(d=>(
          <li key={d.id}>
            {d.titulo} (Siglo {d.siglo})
            <br />
            <img src={d.imagen_url} alt={d.titulo} style={{width:'200px', marginTop:'5px'}} />
          </li>
        ))}
      </ul>
    </div>
  );
}
