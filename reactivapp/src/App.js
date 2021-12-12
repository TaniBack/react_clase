import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'


// Componente funcional con un return que devuelve lo que se renderiza   

function App() {
  return (
    <div className="App"> 
      <h3>Componente Header</h3>
        <Header/>
        <hr/>
      <h3>Componente MAIN</h3>
        <Main/>  
        <hr/>
      <h3>Contenido en App.js</h3>
        <p>Primer proyecto con React importando componentes en App.js :)</p>
        <img src={logo} className="App-logo" alt="logo" />
        <hr/>
      <h3>Componente Footer</h3>
        <Footer/>
    </div>
  );
}

export default App;
