import './App.css';
import {data} from './data/UserData'
import Testimonio from './components/Testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        { 
          data.map((data) =>
            <Testimonio
              nombre = {data.nombre}
              pais = {data.pais}
              imagen = {data.imagen}
              cargo = {data.cargo}
              empresa = {data.empresa}
              testimonio =  {data.testimonio}
            />
          )  
        }
      </div>
    </div>
  );
}

export default App;
