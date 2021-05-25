import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <div className="App-content">
        <div className="App-content-left">
          <h2>menu</h2>
          <ul>
            <li><div><a href="/"><h5>1 menu</h5></a></div></li>
            <li><div><a href="/"><h5>2 menu</h5></a></div></li>
            <li><div><a href="/"><h5>3 menu</h5></a></div></li>
            <li><div><a href="/"><h5>4 menu</h5></a></div></li>
            <li><div><a href="/"><h5>5 menu</h5></a></div></li>
            
          </ul>
        </div>
        <div className="App-content-right">
          <div className="App-content-center">
            <div><h3>CARD CENTER CONTENT</h3></div>
            <div><h3>CARD CENTER CONTENT</h3></div>
            <div><h3>CARD CENTER CONTENT</h3></div>
            <div><h3>CARD CENTER CONTENT</h3></div>
            
          </div>
          <div className="App-content-bottom">
            <h2>BOTTOM CONTENT</h2>
          </div>
        </div>
      </div>      
      <div className="App-footer">
        <h2>FOOTER CONTENT</h2>
      </div>
    </div>
  );
}

export default App;
