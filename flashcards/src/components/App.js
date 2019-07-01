import React, {Component} from 'react';
import Header from "./header/Header";
import MainContent from "./mainContent/MainContent";
import Footer from "./footer/Footer";
import {BrowserRouter, Route} from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

const Body = styled.div `
  background: rgb(241, 244, 247);
  height: 100%;
  margin: 0 auto;
`

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Body> 
          <Route exact path="/" render={() => 
            <div>
              <Header />
              <MainContent />
              {/* <Footer /> */}
            </div>
          } /> 

          {/* <Route exact path="/" render={() =>
            <div>
          
            </div> 
            }/>

          <Route exact path="/" render={() =>  
            <div>
    
            </div>
          } />  */}
      </Body>
      </BrowserRouter>
    );
  }
}

export default App;