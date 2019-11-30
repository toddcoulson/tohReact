import React from 'react';
import flag from './images/american-flag.jpg';

import './scss/main.scss';
import './App.css';
import Header from './components/Header'


function App() {

    

  return (<div className="App">
      <div className="holdAll">
            <header className="left amFlag">
            	<img src={flag} className="amFlagImg" alt="amFlag left" />
            </header>
            <div className="firstContain bringToFront">
                <div className="container">
                    <div className="row row-content">
                        
                        <Header/>
                        
                    </div>
                </div>
            </div>
            <div id="footer" ui-view="footer">
            <p className="text-center mediumText">Bucks County Tour of Honor <i className="fa fa-star" aria-hidden="true"></i> P.O. Box 689 <i className="fa fa-star" aria-hidden="true"></i> Doylestown, PA. 18901</p>
            </div>
            <div className="right amFlag">
            	<img src={flag} className="amFlagImg" alt="amFlag left" />
            </div>
        </div>
    </div>
  );
}

export default App;
