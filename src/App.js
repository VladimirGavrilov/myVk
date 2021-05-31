import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import state from './redax/state'
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
      <div className="App">
      <header className="App-header">
        <div>Logo</div>
        <h1>TITLE</h1>
        <div>
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
        </div>            
      </header>
      <div className="App-content-separator"></div>
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
        <div className="App-content-top">
          <article>
            <img src='http://img.crazys.info/files/i/2013.11.9/1383937066_24.jpeg' width='200' />
            <h2>{state.top.[0]}</h2>
            <p>
                {state.top.[1]} 
                                    
                </p>
                <button>Подробнее &gt;</button>
          </article>
          <article>
            <img src='http://img.crazys.info/files/i/2013.11.9/1383937066_24.jpeg' width='200' />
            <h2>top CONTENT</h2>
            <p>
                Мы вынуждены отталкиваться от того, что
                  социально-экономическое развитие позволяет выполнить 
                  важные задания по разработке первоочередных требований. 
                                    
                </p>
                <button>Подробнее &gt;</button>
          </article>
          <article>
            <img src='http://img.crazys.info/files/i/2013.11.9/1383937066_24.jpeg' width='200' />
            <h2>top CONTENT</h2>
            <p>
                Мы вынуждены отталкиваться от того, что
                  социально-экономическое развитие позволяет выполнить 
                  важные задания по разработке первоочередных требований. 
                                    
                </p>
                <button>Подробнее &gt;</button>
          </article>
          
         
          </div>
          <div className="App-content-separator"> </div>
          <div className="App-content-centr">            
            <article>
            <img src='http://img.crazys.info/files/i/2013.11.9/1383937066_24.jpeg' width='200' />
            <h2>center CONTENT</h2>
            <p>
                Мы вынуждены отталкиваться от того, что
                  социально-экономическое развитие позволяет выполнить 
                  важные задания по разработке первоочередных требований. 
                  Базовые сценарии поведения пользователей рассмотрены исключительно в 
                  разрезе маркетинговых и финансовых предпосылок. С учётом сложившейся
                    международной обстановки, постоянное информационно-пропагандистское обеспечение нашей 
                    деятельности играет определяющее значение для новых предложений. 
                    В своём стремлении повысить качество жизни, они забывают, что сложившаяся
                    структура организации обеспечивает актуальность системы обучения кадров, 
                    соответствующей насущным потребностям. Независимые государства преданы
                      социально-демократической анафеме. Вот вам яркий пример современных тенденций -
                      укрепление и развитие внутренней структуры, а также свежий взгляд на привычные вещи -
                        безусловно открывает новые горизонты для дальнейших направлений развития.
                        В рамках спецификации современных стандартов, активно развивающиеся страны 
                     третьего мира освещают чрезвычайно интересные особенности картины в целом, 
                     однако конкретные выводы, разумеется, объединены в целые кластеры себе подобных!
                </p>
                </article>
                
          </div>
          <div className="App-content-separator"></div>
          <div className="App-content-bottom">
        <article>
          <img src='http://img.crazys.info/files/i/2013.11.9/1383937066_24.jpeg' width='200' />
            <h2>center CONTENT</h2>
            <p>
                Мы вынуждены отталкиваться от того, что
                  социально-экономическое развитие позволяет выполнить 
                  важные задания по разработке первоочередных требований. 
                  Базовые сценарии поведения пользователей рассмотрены исключительно в 
                  разрезе маркетинговых и финансовых предпосылок. С учётом сложившейся
                    международной обстановки, постоянное информационно-пропагандистское обеспечение нашей 
                    деятельности играет определяющее значение для новых предложений.
                </p>
          </article>
          <article>
          <img src='http://img.crazys.info/files/i/2013.11.9/1383937066_24.jpeg' width='200' />
            <h2>center CONTENT</h2>
            <p>
                Мы вынуждены отталкиваться от того, что
                  социально-экономическое развитие позволяет выполнить 
                  важные задания по разработке первоочередных требований. 
                  Базовые сценарии поведения пользователей рассмотрены исключительно в 
                  разрезе маркетинговых и финансовых предпосылок. С учётом сложившейся
                    международной обстановки, постоянное информационно-пропагандистское обеспечение нашей 
                    деятельности играет определяющее значение для новых предложений.
                </p>
          </article>
          <article>
          <img src='http://img.crazys.info/files/i/2013.11.9/1383937066_24.jpeg' width='200' />
            <h2>center CONTENT</h2>
            <p>
                Мы вынуждены отталкиваться от того, что
                  социально-экономическое развитие позволяет выполнить 
                  важные задания по разработке первоочередных требований. 
                  Базовые сценарии поведения пользователей рассмотрены исключительно в 
                  разрезе маркетинговых и финансовых предпосылок. С учётом сложившейся
                    международной обстановки, постоянное информационно-пропагандистское обеспечение нашей 
                    деятельности играет определяющее значение для новых предложений.
                </p>
          </article>
                
          </div>
        </div>
      </div>
      <div className="App-content-separator"> </div>
      <div className="App-content-cards">
            <div><h3>CARD CENTER CONTENT</h3></div>
            <div><h3>CARD CENTER CONTENT</h3></div>
            <div><h3>CARD CENTER CONTENT</h3></div>
            <div><h3>CARD CENTER CONTENT</h3></div>
            <div><h3>CARD CENTER CONTENT</h3></div>
            <div><h3>CARD CENTER CONTENT</h3></div>
            
          </div>      
      <div className="App-footer">
        <h2>FOOTER CONTENT&copy;</h2>
      </div>
    </div>
  );
}

export default App;
