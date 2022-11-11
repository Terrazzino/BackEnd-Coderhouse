import './App.css';

//IMPORTACION DE COMPONENTES
import {Header} from './component/header';
import {Usuario} from './component/usuario'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
        <Usuario/>
      </div>
    </div>
  );
}

export default App;