import React, {Component} from 'react';
import Header from "./header/Header";
import MainContent from "./mainContent/MainContent";
import Footer from "./footer/Footer";
import {BrowserRouter, Route} from 'react-router-dom';
import Module from './mainContent/Module';
import data from '../data/data.js';
import Flashcard from '../components/flashcard/Flashcard';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div> 
          <Route exact path="/" render={() => 
            <div>
              <Header />
              <MainContent data={data}/>
              {/* <Footer /> */}
            </div>
          } /> 
              <Route exact path="/data_science" render={() =>  
                <div>
                  <Header />
                  <Module data={data} module='Data Science' url='data_science'/>
                </div>
          } /> 

              <Route exact path="/full_stack" render={() =>  
                <div>
                  <Header />
                  <Module data={data} module='Full Stack Web' url='full_stack'/>
                </div>
          } /> 

              <Route exact path="/android_development" render={() =>  
                <div>
                  <Header />
                  <Module data={data} module='Android Development' url='android_development'/>
                </div>
          } /> 

              <Route exact path="/computer_science" render={() =>  
                <div>
                  <Header />
                  <Module data={data} module='Computer Science' url='computer_science'/>
                </div>
          } /> 
              <Route exact path="/ios_development" render={() =>  
                <div>
                  <Header />
                  <Module data={data} module='iOS Development' url='ios_development'/>
                </div>
          } /> 
              <Route exact path="/ux_design" render={() =>  
                <div>
                  <Header />
                  <Module data={data} module='UX Design' url='ux_design'/>
                </div>
          } /> 



          <Route path='/ux_design/flashcard/' render={() => 
                 <div>
                 <Flashcard data={data}/>
               </div>
          } />
          <Route path='/ios_development/flashcard/' render={() => 
                 <div>
                 <Flashcard data={data}/>
               </div>
          } />
          <Route path='/computer_science/flashcard/' render={() => 
                 <div>
                 <Flashcard data={data}/>
               </div>
          } />
          <Route path='/android_development/flashcard' render={() => 
                 <div>
                 <Flashcard data={data}/>
               </div>
          } />
          <Route path='/full_stack/flashcard' render={() => 
                 <div>
                 <Flashcard data={data}/>
               </div>
          } />
          <Route path='/data_science/flashcard' render={() => 
                 <div>
                 <Flashcard data={data}/>
               </div>
          } />
          
      </div>
      </BrowserRouter>
    );
  }
}

export default App;