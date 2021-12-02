import logo from './logo.svg';
import './App.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

// Componente funcional con un return que devuelve lo que se renderiza   

function App() {
  return (
    <div className="App"> 
      <Header/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Main/>  
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Primer proyecto con React :)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <Footer/>
    </div>
  );
}

export default App;
